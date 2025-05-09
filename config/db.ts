import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "malvarez123",
  database: "dashboard",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
});
