const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const pjson = require("./package.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/author.routes")(app);

app.listen(port, () => {
  console.log(`API Server Version: ${pjson.version}`);
  console.log(`Listening on port: ${port}`);
});
