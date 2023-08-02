const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8190;
require("dotenv").config();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", require("./routes/email"));
app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
