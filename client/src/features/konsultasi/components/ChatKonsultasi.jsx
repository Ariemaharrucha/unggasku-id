import { format } from "date-fns";
import { VscSend } from "react-icons/vsc";
import { IoLogoWechat } from "react-icons/io5";
import { Navbar } from "../../../components/shared/Navbar.jsx";
import { useLocation, useParams } from "react-router-dom";
import useUser from "../../../stores/useStore.js";
import { useChatKonsultasi } from "../hooks/useChatkonsultasi.jsx";

export const Chatkonsultasi = () => {
  const { user } = useUser();
  const { konsultasiId } = useParams();
  const location = useLocation();
  const konsultasi_id = parseInt(konsultasiId);

  const { nama_dokter, spesialis, image_profile, jam_kerja } = location.state || {};

  // Use the custom hook for chat functionality
  const {
    messages,
    loading,
    message,
    isUserTyping,
    latestMessageRef,
    handleMessageChange,
    handleKeyDown,
    sendMessage,
  } = useChatKonsultasi(konsultasi_id, user);
  return (
    <>
      <Navbar />

      <section className="min-h-screen w-full flex flex-col bg-gray-200">
        <div className="bg-secondary-300 w-full py-2 px-32">
          <div className="flex items-center">
            <div className="w-14 h-14 overflow-hidden rounded-full border-2 border-black">
              <img className="object-cover object-top" src={image_profile} alt="Dokter" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-md font-bold pl-3">{nama_dokter || "Dokter Tidak Diketahui"}</h3>
              <p className="text-sm pl-3 opacity-50">{spesialis || "spesialis Tidak Diketahui"}</p>
              <p className="text-sm pl-3 opacity-50">{jam_kerja || "jam kerja tidak diketahui"}</p>
            </div>
          </div>
        </div>

        {/* Chat */}
        <div className="flex flex-grow flex-col justify-between py-4 px-32">
          <div className="flex flex-grow flex-col h-96 overflow-y-auto space-y-4 pb-1">
            {loading ? (
              <p>Loading messages...</p>
            ) : messages.length === 0 ? (
              <div className="flex flex-col flex-grow items-center justify-center text-gray-500">
                <IoLogoWechat size={120} />
                <p className="text-xl font-medium">Silakan mulai konsultasi Anda</p>
              </div>
            ) : (
              messages.map((message, index) => {
                const isDateChanged =
                  index === 0 ||
                  new Date(messages[index].sent_at).toDateString() !==
                    new Date(messages[index - 1].sent_at).toDateString();

                return (
                  <div key={index}>
                    {isDateChanged && (
                      <div className="text-center text-gray-500 text-sm my-2">
                        {format(new Date(message.sent_at), "EEEE, dd MMMM yyyy")}
                      </div>
                    )}
                    <div
                      className={`flex flex-col ${
                        message.senderId !== user.id ? "items-start" : "items-end"
                      }`}
                      ref={index === messages.length - 1 ? latestMessageRef : null}
                    >
                      <div
                        className={`${
                          message.senderId !== user.id
                            ? "bg-yellow-400 text-gray-900 rounded-r-xl rounded-tl-xl"
                            : "bg-gray-800 text-white rounded-l-xl rounded-tr-xl"
                        } max-w-md p-3`}
                      >
                        <p>{message.content}</p>
                        <span className="text-xs text-gray-500 mt-1">
                          {format(new Date(message.sent_at), "hh:mm a")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Typing animation */}
            {isUserTyping && (
              <div className="flex items-center space-x-2 justify-end">
                <div className="bg-gray-800 text-white rounded-l-xl rounded-tr-xl p-3 max-w-md">
                  <TypingAnimation />
                </div>
              </div>
            )}
          </div>

          <div className="flex mx-auto w-full justify-center">
            <div className="p-0.5 flex items-center bg-white rounded-full w-full">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={handleMessageChange}
                  onKeyDown={handleKeyDown}
                  className="flex-grow px-7 text-lg border rounded-full focus:outline-none border-none"
                />
                <div className="p-2">
                  <button
                    onClick={sendMessage}
                    className="bg-yellow-400 text-primary-950 p-2 rounded-full"
                  >
                    <VscSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const TypingAnimation = () => (
  <div className="flex space-x-1 justify-end">
    <span className="text-2xl animate-bounce">.</span>
    <span className="text-2xl animate-bounce delay-75">.</span>
    <span className="text-2xl animate-bounce delay-150">.</span>
  </div>
);
