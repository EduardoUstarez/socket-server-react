class Sockets {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    //On connection
    this.io.on("connection", (socket) => {
      //Escuchar el evento
      socket.on("mensaje-to-server", (data) => {
        console.log(data);
        //Enviar el mensaje
        this.io.emit("mensaje-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
