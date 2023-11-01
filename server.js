const http = require("http");

const user = [
    { id: 1, name: "Mahesa" },
    { id: 2, name: "Bagus" },
    { id: 3, name: "Raditya" },
];

const server = http.createServer((req, res) => {
    const { method, url } = req;
    let body = [];

    req
        .on("data", (chunk) => {
            body.push(chunk);
        })
        .on("end", () => {
            body = Buffer.concat(body).toString();
            console.log(body);

            let status = 404;
            const response = {
                success: false,
                results: [],
                error: "",
            };

            if (method === "GET" && url === "/user") {
                status = 200;
                response.success = true;
                response.results = user;
            } else if (method === "POST" && url === "/user") {
                const { id, text } = JSON.parse(body);

                if (!id || !text) {
                    status = 400;
                    response.error = "Please add id and text";
                } else {
                    user.push({ id, text });
                    status = 201;
                    response.success = true;
                    response.results = user;
                }
            }

            res.writeHead(status, {
                "Content-Type": "application/json",
                "X-Powered-By": "Node.js",
            });

            res.end(JSON.stringify(response));
        });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});