import logger from "../utils/logger";
import models from "../databases/mysql";

const Init = async () => {
  try {
    await InitMysql();
  } catch (error) {
    logger.error("Error in Init function -> ", error);
  }
};

const InitMysql = async () => {
  try {
    await models.sequelize.sync({
      force: false,
      logging: (v) => logger.info(v),
    });
    logger.info("DB Connection Successful");
  } catch (error) {
    logger.error("Something went wrong when connecting to db", error);
  }
};

export default Init;
