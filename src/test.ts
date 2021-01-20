import { PostgreSQLProvider } from "../src/index";

const db = new PostgreSQLProvider({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  db: "test",
  port: 5432,
  message: "PostgreSQL database started!",
});

db.queryRaw("SELECT * FROM test_table;");
