const express = require("express");
const path = require("path");

const app = express();

app.use("/dist", express.static(path.resolve(__dirname, "frontend", "dist")));

// The canvas has been tainted by cross-origin data.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));

});

app.listen(process.env.PORT || 5050, () => console.log("Server running..."));


  