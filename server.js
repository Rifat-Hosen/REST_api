const express = require("express");
const mongoose = require('mongoose'); 




var db_url = "mongodb://localhost:27017"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(db_url, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected.`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    console.log(err);
    server.close(() => {
      process.exit(1);
    });
});