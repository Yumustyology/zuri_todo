const express = require("express");
const { json } = require("express");
const flights = require("./controllers/todoController");
const models = require("./models/Todo");
const routes = require("./routes/todoRoute");
const monogoose = require("mongoose");
const app = express();

monogoose.connect(
  "",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("db connected")
);

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
