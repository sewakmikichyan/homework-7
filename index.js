const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
});