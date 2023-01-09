import { body, query, param } from "express-validator";

const carCreateDto = [
  body("car.brand")
    .exists()
    .withMessage("Param brand must exists")
    .isString()
    .withMessage("Param brand must be «mercedes», «bmw» or «audi»")
    .toLowerCase()
    .withMessage("Param brand must be a string")
    .isIn(["mercedes", "bmw", "audi"])
    .withMessage("Param brand must be «mercedes», «bmw» or «audi»"),
  body("car.model")
    .exists()
    .withMessage("Param model must exists")
    .isString()
    .withMessage("Param model must be a string")
    .toLowerCase(),
  body("car.year")
    .exists()
    .withMessage("Param year must exists")
    .toInt()
    .isNumeric()
    .withMessage("Param year must be a number")
    .isLength({ min: 4, max: 4 })
    .withMessage("Param year must has 4 digits"),
  body("car.price")
    .exists()
    .withMessage("Param price must exists")
    .toInt()
    .isNumeric()
    .withMessage("Param price must be a number")
    .isInt({ min: 0 })
    .withMessage("Param price must be greater than 0"),
];

const carGetListDto = [
  query("page")
    .optional()
    .toInt()
    .isNumeric()
    .withMessage("Param page must be a number")
    .isInt({ min: 0 })
    .withMessage("Param page must be greater than 1"),
  query("onPage")
    .optional()
    .toInt()
    .isNumeric()
    .withMessage("Param onPage must be a number")
    .isInt({ min: 1 })
    .withMessage("Param onPage must be greater than zero"),
  query("sortBy")
    .optional()
    .isString()
    .withMessage("Param sortBy must be a string")
    .toLowerCase(),
  query("sortDirection")
    .optional()
    .toInt()
    .isNumeric()
    .withMessage("Param sortDirection must be a number")
    .isIn([1, -1])
    .withMessage("Param sortDirection must be 1 or -1 number"),
  query("search")
    .optional()
    .isString()
    .withMessage("Param search must be a string")
    .toLowerCase(),
];

const carUpdateDto = [
  param("id")
    .exists()
    .withMessage("Param id must exists")
    .isString()
    .withMessage("Param id must be a string"),
  body("car.brand")
    .exists()
    .withMessage("Param brand must exists")
    .isString()
    .withMessage("Param brand must be a string")
    .toLowerCase()
    .isIn(["mercedes", "bmw", "audi"])
    .withMessage("Param brand must be «mercedes», «bmw» or «audi»"),
  body("car.model")
    .exists()
    .withMessage("Param model must exists")
    .isString()
    .withMessage("Param model must be a string")
    .toLowerCase(),
  body("car.year")
    .exists()
    .withMessage("Param year must exists")
    .toInt()
    .isNumeric()
    .withMessage("Param year must be a number")
    .isLength({ min: 4, max: 4 })
    .withMessage("Param year must has 4 digits"),
  body("car.price")
    .exists()
    .withMessage("Param price must exists")
    .toInt()
    .isNumeric()
    .withMessage("Param price must be a number")
    .isInt({ min: 0 })
    .withMessage("Param price must be greater than 0"),
];

const carDeleteDto = [
  param("id")
    .exists()
    .withMessage("Param id must exists")
    .isString()
    .withMessage("Param id must be a string"),
];

export { carCreateDto, carGetListDto, carUpdateDto, carDeleteDto };
