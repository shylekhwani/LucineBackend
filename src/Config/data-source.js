
import { DataSource } from "typeorm";
import userSchema from "../Schema/userSchema.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",  
  password: "lekhwani",  
  database: "assignment_db",
  synchronize: true,
  logging: true,
  entities: [userSchema],
});

export default AppDataSource;
