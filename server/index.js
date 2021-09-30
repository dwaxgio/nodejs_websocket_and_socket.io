// // BASIC STRUCTURE
// const WebSocket = require("ws");
// const server = new WebSocket.Server({ port: "5000" });

// server.on("connection", (socket) => {
//   socket.on("message", (message) => {
//     socket.send(`Roger that! ${message}`);
//   });
// });

// WITH EXPRESS

const express = require("express");
const path = require("path");
const app = express();
const http = require("http");
const server = http.createServer(app);

const hostname = "127.0.0.1";
const port = 8080;

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(message);
    io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../app/index.html"));
});

app.use("/app", express.static(path.join(__dirname, "../app/")));

// app.listen(port, hostname, () => {
//   console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
// });

server.listen(port, () => {
  console.log('listening on http://${hostname}:${port}/');
});

// // WITH HTTP
// const http = require("http").createServer();

// const io = require("socket.io")(http, {
//   cors: { origin: "*" },
// });

// io.on("connection", (socket) => {
//   console.log("a user connected");

//   socket.on("message", (message) => {
//     console.log(message);
//     io.emit("message", `${socket.id.substr(0, 2)} said ${message}`);
//   });
// });

// http.listen(8080, () => console.log("listening on http://localhost:8080"));
