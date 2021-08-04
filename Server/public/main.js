const socket = io();
const form = document.querySelector("#form");
const chatArea = document.querySelector(".chat-area");
const email1 = "";

socket.on("message", (user) => {
	console.log(user);
	outputMessage(user);
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let msg = e.target.elements.msg.value;

	socket.emit("conversation", msg);

	e.target.elements.msg.value = "";
});

function outputMessage(message) {
	const div = document.createElement("div");
	const p = document.createElement("p");
	p.innerText = message;
	div.appendChild(p);
	chatArea.appendChild(div);
}
