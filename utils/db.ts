import { config } from "dotenv";
config();
import { DataSource } from "typeorm";
import { SqlDatabase } from "@langchain/classic/sql_db";

const DB_USERNAME: string = process.env.DB_USERNAME || "Not Defined";
const DB_PASSWORD: string = process.env.DB_PASSWORD || "Not Defined";
const DB_DATABASE: string = process.env.DB_DATABASE || "Not Defined";

const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

const db = await SqlDatabase.fromDataSourceParams({
  appDataSource: dataSource,
});

export default db;
