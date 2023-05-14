import io from "socket.io-client";

export const socket = io("http://localhost:3000");

export const joinRoom = (data: any) => {
  socket.emit("room-join", data);
};
