import { validationResult } from "express-validator";
import logger from "../../utils/logger";
import models from "../../databases/mysql";

const AddUser = async (req, res) => {
  let response = {};
  try {
    logger.info({ requestInfo: req.body });
    // Request Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.error("Validation Error -> ", { errors: errors.array() });
      response = { status: 422, body: errors.array() };
    } else {
      const createdUser = await models.User.create(req.body);
      response = { status: 200, body: { createdUser } };
    }
  } catch (error) {
    logger.error("Error while adding User -> ", error);
    response = { status: 500, body: { message: "Something Went Wrong :(" } };
  }
  return res.status(response.status).json(response.body);
};

export default AddUser;
