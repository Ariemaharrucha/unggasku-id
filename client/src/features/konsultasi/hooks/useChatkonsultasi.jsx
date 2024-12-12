import {getMessages } from "../services/api.konsultasi.js";
import { useState, useEffect, useRef } from "react";
import socket from "../../../socket/socket.js";

export const useChatKonsultasi = (konsultasi_id, user) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isUserTyping, setIsUserTyping] = useState(false);

  const latestMessageRef = useRef(null);

  // Fetch messages from the server
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await getMessages(konsultasi_id)
      setMessages(response);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle sending messages through the socket
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        konsultasiId: konsultasi_id,
        senderId: user.id,
        content: message,
      });
      setMessage("");
      setIsUserTyping(false);
    }
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    setIsUserTyping(newMessage.trim() !== "");
  };

  // Handle the Enter key event to send messages
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  // Scroll to the latest message
  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages]);

  useEffect(() => {
    // Join the chat room
    socket.emit("joinRoom", konsultasi_id);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [konsultasi_id]);

  useEffect(() => {
    fetchMessages();
  }, [ konsultasi_id]);

  return {
    messages,
    loading,
    message,
    isUserTyping,
    latestMessageRef,
    handleMessageChange,
    handleKeyDown,
    sendMessage,
  };
};
