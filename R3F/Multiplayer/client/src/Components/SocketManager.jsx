import { io } from "socket.io-client";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";

export const socket = io("http://localhost:3001");

const SocketManager = () => {
  const { setCharacters } = useAppContext();

  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }
    function onDisconnect() {
      console.log("disconnected");
    }
    function onMessage(data) {
      console.log(data);
    }
    function characters(value) {
      // console.log(value)
      setCharacters(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);
    socket.on("characters", characters);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
      socket.off("characters", characters);
    };
  }, []);
};

export default SocketManager;
