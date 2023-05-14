import io from "socket.io-client";
const socket_domain = import.meta.env.VITE_SOCKET_DOMAIN ?? "http://localhost:3000"
export const socket = io(socket_domain);

export const joinRoom = (data: any) => {
  console.log(socket_domain, "socket_domain________________________________________________");
  
  socket.emit("room-join", data);
};
