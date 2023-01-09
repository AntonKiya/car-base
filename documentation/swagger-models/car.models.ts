/**
 * @swagger
 * components:
 *   schemas:
 *     CarId:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the car
 *       example:
 *         _id: 63b6b851750ed2dd98750a76
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       properties:
 *         brand:
 *           type: string
 *           description: The brand of the car
 *         model:
 *           type: string
 *           description: The model of the car
 *         year:
 *           type: number
 *           description: Year of manufacture of the car
 *         price:
 *           type: number
 *           description: Price of the car
 *       example:
 *         brand: mercedes
 *         model: s600
 *         year: 1995
 *         price: 9400000
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     SavedCar:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the car
 *         brand:
 *           type: string
 *           description: The brand of the car
 *         model:
 *           type: string
 *           description: The model of the car
 *         year:
 *           type: number
 *           description: Year of manufacture of the car
 *         price:
 *           type: number
 *           description: Price of the car
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the car was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the car was updated
 *       example:
 *         _id: 63b6b851750ed2dd98750a76
 *         brand: mercedes
 *         model: s600
 *         year: 1995
 *         price: 9400000
 *         createdAt: 2023-01-05T11:45:21.533Z
 *         updatedAt: 2023-01-05T11:45:21.533Z
 */
