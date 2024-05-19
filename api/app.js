import express from "express";
import cors from "cors";
import createHttpError from "http-errors";
import cookieParser from "cookie-parser";
import indexRouter from "./routes";
import * as sequelize from "./config/sequelize.js";

const app = express();
const port = 3000;

sequelize.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/", indexRouter);

app.use(function (req, res, next) {
  next(createHttpError(404));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
