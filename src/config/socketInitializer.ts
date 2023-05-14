import io from "socket.io-client";
const socket_domain = process.env.SOCKET_DOMAIN ?? "http://localhost:3000"
export const socket = io(socket_domain);

export const joinRoom = (data: any) => {
  socket.emit("room-join", data);
};
