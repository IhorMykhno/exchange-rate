import vars from "./vars";

const config = {
  migrationStorageTableName: "migrations",
  seederStorage: "sequelize",
  seederStorageTableName: "seeders",
  username: vars.db.userName,
  password: vars.db.userPassword,
  database: vars.db.name,
  host: vars.db.host,
  dialect: "mariadb",
};

module.exports = {
  development: {
    ...config,
  },
  test: {
    ...config,
  },
  production: {
    ...config,
  },
};
