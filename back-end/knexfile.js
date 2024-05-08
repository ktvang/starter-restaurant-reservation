/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://ypbzzunt:sKjTWTFYl6O-4RcRxLa8jt6EL8DI2AvA@bubble.db.elephantsql.com/ypbzzunt",
  DATABASE_URL_DEVELOPMENT = "postgres://yutgizpy:1vcY260znfk7tcI7DobwJrNVindRGcMm@kala.db.elephantsql.com/yutgizpy",
  DATABASE_URL_TEST = "postgres://zitclqra:ynqwReOYASnJ6TK-4QdNQwusWjVZrD9m@kala.db.elephantsql.com/zitclqra",
  DATABASE_URL_PREVIEW = "postgres://fepyzcap:WX9iOhYBv-KgsPz30kQHEO3_Nuhb6atX@kala.db.elephantsql.com/fepyzcap",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
