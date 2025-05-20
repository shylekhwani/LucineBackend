
import AppDataSource from "./data-source.js";

export const connectDB = () => {
  return AppDataSource.initialize()
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Error connecting to the database", error);
      throw error; // propagate error for caller to handle
    });
};
