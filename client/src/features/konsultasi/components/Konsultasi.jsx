/* eslint-disable react/prop-types */
import { VscSend } from "react-icons/vsc";
import { Navbar } from "../../../components/shared/Navbar.jsx";
import useUser from "../../../stores/useStore.js";
import { format } from "date-fns";
import { IoLogoWechat } from "react-icons/io5";
import { useKonsultasi } from "../hooks/useKonsultasi.jsx";

export const Konsultasi = () => {
  const { user } = useUser();
  
  const {
    message,
    setMessage,
    messages,
    listDokter,
    selectedDokter,
    setListDokter,
    setSelectedDokter,
    loading,
    isUserTyping,
    handleSendMessage,
    handleMessage,
    handleKeyDown,
    latestMessageRef,
    audioRef,
    notificationSound
  } = useKonsultasi(user);

  return (
    <div>
      <>
        <div>
          <Navbar />
        </div>
        <audio ref={audioRef} src={notificationSound} preload="auto" />
        <section className="min-h-screen">
          <div className="w-full bg-secondary-300 py-3 px-6">
            <h1 className="text-xl font-bold text-gray-800">Chat</h1>
          </div>

          <div className="flex h-screen">
            <div className="w-1/4 bg-white">
              {listDokter &&
                listDokter.map((dokter) => (
                  <div key={dokter.id}>
                    <div
                      onClick={() => {
                        if (selectedDokter?.id !== dokter.id) {
                          setSelectedDokter(dokter);
                          setMessage("");
                          console.log(dokter);
                          setListDokter((prevDokter) =>
                            prevDokter.map((u) =>
                              u.konsultasi_id === dokter.konsultasi_id
                                ? { ...u, hasNewMessage: false }
                                : u
                            )
                          );
                        }
                      }}
                      className={`cursor-pointer px-4 py-2 ${
                        selectedDokter?.id === dokter.id
                          ? "bg-gray-200"
                          : "bg-white"
                      }`}
                    >
                      <div className=" flex items-center gap-4">
                        <div className="size-16 overflow-hidden rounded-full">
                          <img
                            src={dokter.image_profile}
                            alt={`Foto dokter ${dokter.username}`}
                            className=" object-cover  "
                          />
                        </div>
                        <div>
                          <div className="font-semibold flex gap-3">
                            {dokter.username}
                            {dokter.hasNewMessage && (
                            <span className="text-red-500">Pesan baru!</span>
                            )}
                            </div>
                          <div className="text-sm text-gray-400">
                            {dokter.spesialis}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex-1 flex flex-col justify-between p-4 bg-gray-200">
              <div className="flex-grow space-y-4 overflow-y-auto ">
                {loading ? (
                  <p>Loading messages...</p>
                ) : selectedDokter && messages.length === 0 ? (
                  <div className="h-full flex justify-center items-center ">
                    <div className="flex flex-col justify-center items-center text-gray-500">
                      <IoLogoWechat size={120} />
                      <p className="text-xl font-medium">
                        Belum ada Chat dengan dokter
                      </p>
                    </div>
                  </div>
                ): (
                  <>
                    {messages &&
                      messages.map((message, index) => {
                        const tanggal =
                          index === 0 ||
                          new Date(messages[index].sent_at).toDateString() !==
                            new Date(
                              messages[index - 1].sent_at
                            ).toDateString();

                        return (
                          <div key={index}>
                            {tanggal && (
                              <div className="text-center text-gray-500 text-sm my-2">
                                {format(
                                  new Date(message.sent_at),
                                  "EEEE, dd MMMM yyyy"
                                )}
                              </div>
                            )}

                            <div
                              className={`flex flex-col ${
                                message.senderId !== user.id
                                  ? "items-start"
                                  : "items-end"
                              }`}
                              ref={
                                index === messages.length - 1
                                  ? latestMessageRef
                                  : null
                              }
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
                      })}
                    {isUserTyping && (
                      <div className="flex items-center space-x-2 justify-end">
                        <div className="bg-gray-800 text-white rounded-l-xl rounded-tr-xl p-3 max-w-md">
                          <TypingAnimation isUserTyping={true} />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              
              {selectedDokter ? (
              <div className="p-0.5 flex items-center bg-white rounded-full mt-4">
                <div className="flex w-full">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={handleMessage}
                    onKeyDown={handleKeyDown}
                    className="flex-grow px-6 text-lg border rounded-full focus:outline-none border-none"
                  />
                  <div className="p-2">
                    <button
                      onClick={handleSendMessage}
                      className="bg-yellow-400 text-primary-950 p-2 rounded-full"
                    >
                      <VscSend />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <p className="text-xl font-medium">
                  Pilih user untuk mulai chat
                </p>
              </div>
            )}
              
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

const TypingAnimation = ({ isUserTyping }) => {
  return (
    <div
      className={`flex space-x-1 ${
        isUserTyping ? "justify-end" : "justify-start"
      }`}
    >
      <span className="text-2xl animate-bounce">.</span>
      <span className="text-2xl animate-bounce delay-75">.</span>
      <span className="text-2xl animate-bounce delay-150">.</span>
    </div>
  );
};
