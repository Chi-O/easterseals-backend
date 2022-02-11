import express from "express";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';
import routes from "./routes/index";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// set the view to ejs
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());

app.use(routes);
app.listen(PORT, function () {
    console.log("listening on port " + PORT);
  });