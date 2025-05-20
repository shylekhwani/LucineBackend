
import { DataSource } from "typeorm";
import userSchema from "../Schema/userSchema.js";
import softwareSchema from "../Schema/softwareSchema.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",  
  password: "lekhwani",  
  database: "assignment_db",
  synchronize: true,
  logging: true,
  entities: [userSchema, softwareSchema],
});

export default AppDataSource;
