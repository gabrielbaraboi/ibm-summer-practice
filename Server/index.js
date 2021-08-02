// Server start config
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || 7055;

server.listen(port, () => {
	console.log(`Server starts on port ${port}`);
});


