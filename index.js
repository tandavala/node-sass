const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

router.get("/", function(req, res) {
  res.send("Hello world");
});

// add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("running...");
