import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://maksmeleshko12:<password>@cluster0.66wan.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(fileUpload({}));
app.use(express.json());
app.use(express.static("static"));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("listening on port " + PORT));
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
}

startApp();
