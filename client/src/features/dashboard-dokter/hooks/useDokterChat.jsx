import { useState, useEffect, useRef } from "react";
import axios from "axios";
import socket from "../../../socket/socket.js";

const useDokterChat = (user) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previousKonsultasiId, setPreviousKonsultasiId] = useState(null);
  const [isDokterTyping, setIsDokterTyping] = useState(false);
  const audioRef = useRef(null);
  const latestMessageRef = useRef(null);

  useEffect(() => {
    if (user?.id) {
      // Fetch users list
      const fetchUsers = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/dokter/${user.id}/users`
          );
          setUsers(response.data.data);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        }
      };
      fetchUsers();
    }
  }, [user?.id]);

  useEffect(() => {
    if (selectedUser?.konsultasi_id) {
      // Join socket room
      socket.emit("joinRoom", selectedUser.konsultasi_id);

      // Listen for incoming messages
      const handleReceiveMessage = (msg) => {
        setMessages((prev) => [...prev, msg]);
      };

      socket.on("receiveMessage", handleReceiveMessage);
      return () => {
        socket.off("receiveMessage", handleReceiveMessage);
      };
    }
  }, [selectedUser?.konsultasi_id]);

  useEffect(() => {
    // Fetch messages when user is selected
    const fetchMessages = async () => {
      if (selectedUser?.konsultasi_id) {
        try {
          setLoading(true);
          const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/messages/${
              selectedUser.konsultasi_id
            }`
          );
          setMessages(response.data.data);
        } catch (error) {
          console.error("Failed to fetch messages:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMessages();
  }, [selectedUser?.konsultasi_id]);

  useEffect(() => {
    // Notify user about new messages
    const handleNotification = (data) => {
      if (data.konsultasiId !== selectedUser?.konsultasi_id) {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Failed to play notification sound:", error);
          });
        }

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.konsultasi_id === data.konsultasiId
              ? { ...user, hasNewMessage: true }
              : user
          )
        );
      }
    };

    socket.on("newMessageNotification", handleNotification);
    return () => {
      socket.off("newMessageNotification", handleNotification);
    };
  }, [selectedUser?.konsultasi_id]);

  // leave room
  useEffect(() => {
    if (selectedUser?.konsultasi_id) {
      socket.emit("leaveRoom", previousKonsultasiId);
      socket.emit("joinRoom", selectedUser.konsultasi_id);
    }
  }, [previousKonsultasiId, selectedUser?.konsultasi_id]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
    setIsDokterTyping(e.target.value.trim() !== "");
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("sendMessage", {
        konsultasiId: selectedUser.konsultasi_id,
        senderId: user.id,
        content: message,
      });
      setMessage("");
      setIsDokterTyping(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (latestMessageRef.current) {
      latestMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages]);

  const selectUser = (user) => {
    setSelectedUser(user);
    setMessages([]);
    setPreviousKonsultasiId(user.konsultasi_id);
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.konsultasi_id === user.konsultasi_id
          ? { ...u, hasNewMessage: false }
          : u
      )
    );
  };

  return {
    message,
    messages,
    users,
    selectedUser,
    loading,
    isDokterTyping,
    audioRef,
    latestMessageRef,
    handleMessage,
    handleSendMessage,
    handleKeyDown,
    selectUser,
  };
};

export default useDokterChat;