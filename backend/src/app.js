const port = 3000;

const express = require("express");

const app = express();
app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR - ${err.message}`);
  } else {
    console.log(`Server is up and listening on ${port}`);
  }
});

app.use("/ping", (req, res) => {
  res.status(200).send("Server is up");
});
