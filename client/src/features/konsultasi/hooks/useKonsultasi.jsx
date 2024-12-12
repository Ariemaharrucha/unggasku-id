import { useState, useEffect, useRef } from "react";
import socket from "../../../socket/socket.js";
import { getDokter, getMessages } from "../services/api.konsultasi.js";
import notificationSound from "../../../assets/sound/notificationSound.mp3"


export const useKonsultasi = (user) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [listDokter, setListDokter] = useState([]);
  const [selectedDokter, setSelectedDokter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const latestMessageRef = useRef(null);
  const audioRef = useRef(null);

  // Fetch doctors
  useEffect(() => {
    const fetchDokters = async () => {
      if (user?.id) {
        try {
          const response = await getDokter(user?.id)
          setListDokter(response);
        } catch (error) {
          console.error("Failed to fetch doctors:", error);
        }
      }
    };
    fetchDokters();
  }, [user?.id]);

  // Handle socket communication
  useEffect(() => {
    if (selectedDokter?.konsultasi_id) {
      socket.emit("joinRoom", selectedDokter.konsultasi_id);

      const handleReceiveMessage = (msg) => {
        setMessages((prev) => [...prev, msg]);
      };

      socket.on("receiveMessage", handleReceiveMessage);
      return () => {
        socket.off("receiveMessage", handleReceiveMessage);
      };
    }
  }, [selectedDokter?.konsultasi_id]);

  // Fetch messages from the server
  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedDokter?.konsultasi_id) {
        try {
          setLoading(true);
          const response = await getMessages(selectedDokter.konsultasi_id);
          setMessages(response);
        } catch (error) {
          console.error("Failed to fetch messages:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchMessages();
  }, [selectedDokter?.konsultasi_id]);

  // notif
  useEffect(() => {
    const handleNotification = (data) => {
      if (data.konsultasiId !== selectedDokter?.konsultasi_id) {
        console.log("Pesan baru:", data.message);

        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Failed to play notification sound:", error);
          });
        }

        setListDokter((prevDokter) =>
          prevDokter.map((dokter) =>
            dokter.konsultasi_id === data.konsultasiId
              ? { ...dokter, hasNewMessage: true }
              : dokter
          )
        );
      }
    };
    socket.on("newMessageNotification", handleNotification);
    console.log("connect notif");

    return () => {
      socket.off("newMessageNotification", handleNotification);
    };
  }, [selectedDokter?.konsultasi_id]);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        konsultasiId: selectedDokter.konsultasi_id,
        senderId: user.id,
        content: message,
      });
      setMessage("");
      setIsUserTyping(false);
    }
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    setIsUserTyping(e.target.value.trim() !== "");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToLatestMessage = () => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    scrollToLatestMessage();
  }, [messages]);

  return {
    message,
    setMessage,
    messages,
    listDokter,
    setListDokter,
    selectedDokter,
    setSelectedDokter,
    loading,
    isUserTyping,
    handleSendMessage,
    handleMessage,
    handleKeyDown,
    latestMessageRef,
    audioRef,
    notificationSound
  };
};
