const express = require("express");
const mongoose = require("mongoose");
const routes=require("./routes/route")

const app = express();

app.use(express.json());
app.use("/",routes)

//DB connection

mongoose
  .connect("mongodb+srv://rakshitharakshitha6242:raksh@cluster0.rdl2otz.mongodb.net/")
  .then(() => {
    console.log("DB connected successfully");
  })

  .catch((err) => {
    console.log(err);
  });

app.listen(3003, () => {
  console.log("Server Running At 3003");
});