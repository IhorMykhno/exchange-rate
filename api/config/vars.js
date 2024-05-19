const path = require("path");

require("dotenv-safe").config({
  allowEmptyValues: true,
  path: path.join(__dirname, "../.env"),
  example: path.join(__dirname, "../.env.example"),
});

module.exports = {
  db: {
    host: process.env.HOST,
    name: process.env.DB_NAME,
    userName: process.env.DB_USER_NAME,
    userPassword: process.env.DB_USER_PASSWORD,
  },
};
