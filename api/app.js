import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/v1/", indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
