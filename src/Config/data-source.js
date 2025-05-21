
import { DataSource } from "typeorm";
import userSchema from "../Schema/userSchema.js";
import softwareSchema from "../Schema/softwareSchema.js";
import requestSchema from "../Schema/requestSchema.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",  
  password: "lekhwani",  
  database: "assignment_db",
  synchronize: true,
  logging: true,
  entities: [userSchema, softwareSchema, requestSchema],
});

export default AppDataSource;
