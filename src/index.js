const express = require("express");
require("dotenv").config();
require("express-async-errors");
const app = express();
const port = process.env.PORT || 3000;
const router = require("./routes/index.route");
const fileUpload = require("express-fileupload");
const { errorHandler, notFoundURLHandler } = require("./middleware/errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Ping Successfully" });
});

app.use("/", router);

app.use("*", notFoundURLHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
