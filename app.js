import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bp from "body-parser";
import * as path from "path";

dotenv.config();

const PORT = process.env.DB_PORT || 4000;
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
//     .then(() => {
//         console.log('DB connected');
//     });

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
