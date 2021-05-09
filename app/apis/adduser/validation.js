import { check } from "express-validator";
const AddUserValidation = [
  check("email").isEmail().withMessage("Must Be a Valid Email"),
  check("name").isString().withMessage("Must Be a Valid String"),
];

export default AddUserValidation;
