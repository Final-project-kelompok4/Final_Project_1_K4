const { Pool } = require("pg");

const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "project1",
  password: "riska2206",
  port: 5432,
};

const pool = new Pool(dbConfig);

module.exports = pool;
