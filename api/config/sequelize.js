import { sequelize } from "../models";

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.info("Connection to the database has been established successfully");
  } catch (err) {
    console.error(`Unable to connect to the database: ${err.message}`);
  }
};
