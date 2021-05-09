import { check } from "express-validator";

const AddCarValidation = [
  check("car_license_number").isString().withMessage("Must Be a Valid String"),
  check("manufacturer").isString().withMessage("Must Be a Valid String"),
  check("model").isString().withMessage("Must Be a Valid String"),
];

export default AddCarValidation;
