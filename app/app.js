//const socket = io("ws://localhost:8080");
var socket = io();

var btnSend = document.getElementById("btn-send");

socket.on("message", (text) => {
  const el = document.createElement("li");
  el.innerHTML = text;
  document.querySelector("ul").appendChild(el);
});


// document.querySelector("button").onclick = () => {
//   const text = document.querySelector("input").value;
//   socket.emit("message", text);
// };

function sendMessage() {
  const text = document.querySelector("input").value;
  socket.emit("message", text);
}

//

// btnSend.addEventListener("click", test);

// function test(){
//   alert("test")
// }
