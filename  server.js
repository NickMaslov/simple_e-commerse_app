// const express = require("express");
// const jsonServer = require("json-server");
// const chokidar = require("chokidar");
// const cors = require("cors");

// const fileName = process.argv[2] || "./data.js";
// const port = process.argv[3] || 3500;

// let router = undefined;

// const app = express();

// const createServer = () => {
//   delete require.cache[require.resolve(fileName)];
//   setTimeout(() => {
//     router = jsonServer.router(
//       fileName.endsWith(".js") ? require(fileName)() : fileName
//     );
//   }, 100);
// };

// createServer();

// app.use(cors());
// app.use(jsonServer.bodyParser);
// app.use("/api", (req, resp, next) => router(req, resp, next));

// chokidar.watch(fileName).on("change", () => {
//   console.log("Reloading web service data...");
//   createServer();
//   console.log("Reloading web service data complete.");
// });

// app.listen(port, () => console.log(`Web service running on port ${port}`));

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
