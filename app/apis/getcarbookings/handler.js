import { validationResult } from "express-validator";
import logger from "../../utils/logger";

const GetCarBookings = async (req, res) => {
  // Request Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error("Validation Error -> ", { errors: errors.array() });
    return res.status(422).json({ errors: errors.array() });
  }
};

export default GetCarBookings;
