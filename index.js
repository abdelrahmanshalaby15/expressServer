const express = require("express");
const app = express();
const port = 5555;

app.get("/", (req, res) => {
  var host = req.get("host");
  // console.log(req.headers);
  var origin = req.baseUrl;
  console.log(origin);
  res.send(
    `${req.originalUrl} - ${origin} - ${host} - ${req.socket.remoteAddress} - ${req.headers["x-forwarded-for"]}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
