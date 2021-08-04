const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const io = require("socket.io")(server, { cors: "*" });

const port = process.env.PORT || 7055;

io.on("connection", (socket) => {
	socket.broadcast.emit("message", "User connected");

	socket.on("disconnect", () => {
		socket.broadcast.emit("message", "User disconected");
	});

	io.on("connect_error", (err) => {
		console.log(`connect_error due to ${err.message}`);
	});

	socket.on("conversation", (msg) => {
		io.emit("message", msg);
	});
});

io.on("connect_error", (err) => {
	console.log(`connect_error due to ${err.message}`);
});

server.listen(port, () => {
	console.log(`Server starts on port ${port}`);
});
