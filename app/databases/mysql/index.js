import { Sequelize } from "sequelize";
import logger from "../../utils/logger";
import { basename, join } from "path";
import { readdirSync } from "fs";
import {
  MYSQL_DB,
  MYSQL_UNAME,
  MYSQL_PWD,
  MYSQL_HOST,
} from "../../lib/constants";

const sequelize = new Sequelize(MYSQL_DB, MYSQL_UNAME, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  logging: (v) => logger.info(v),
});
(async () => {
  try {
    await sequelize.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
})();

const baseName = basename(__filename);
const db = {};

const dirName = `${__dirname}/models`;

readdirSync(dirName)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== baseName && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(join(dirName, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
console.log({ keys: Object.keys(db) });

db["booking"].belongsTo(db.user, { foreignKey: "user_id", targetKey: "id" });
db["booking"].belongsTo(db.car, { foreignKey: "car_id", targetKey: "id" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
