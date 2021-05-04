const express = require("express");
const fs = require("fs");
const path = require("path");
const dataPath = "./data/doggos.json";

const server = express();
const PORT = 3000;

// MOCK SLOW DOWN IMAGE API
server.use("/img/doggos/dog*.jpg", (req, res, next) => {
  setTimeout(next, 3000);
});

server.use(express.static(__dirname + "/public"));

// CRP demo, no need to touch

server.use("/crpdemojs.js", (req, res, next) => {
  setTimeout(next, 4000);
});

server.use("/crpdemocss.css", (req, res, next) => {
  setTimeout(next, 8000);
});

server.get("/crpdemojs.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/crpdemojs.js"));
});
server.get("/crpdemocss.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/crpdemocss.css"));
});

/* END CRP demo */

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

server.get("/serviceworker", (req, res) => {
  res.sendFile(path.join(__dirname + "/sw.js"));
});

server.get("/manifest", (req, res) => {
  res.sendFile(path.join(__dirname + "/manifest.json"));
});

server.get("/appcache", (req, res) => {
  res.sendFile(path.join(__dirname + "/doggocrew.appcache"));
});

server.get("/doggos", (req, res) => {
  fs.readFile(dataPath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

server.get("/ad-space", (req, res) => {
  res.sendFile(path.join(__dirname + "/data/ad.html"));
});

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
