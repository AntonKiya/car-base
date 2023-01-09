import express from "express";
import { CarController } from "@controllers";
import {
  carCreateDto,
  carGetListDto,
  carUpdateDto,
  carDeleteDto,
} from "./car.dto";
import { paramsValidateMiddleware } from "@middlewares";

const carController = new CarController();

const router = express.Router();

/**
 * @swagger
 * /car/list:
 *   get:
 *     summary: Get car list
 *     tags: [Cars]
 *     parameters: [
 *       {
 *         name: search,
 *         in: query,
 *         required: false,
 *         example: mercedes
 *       },
 *       {
 *         name: sortBy,
 *         in: query,
 *         required: false,
 *         example: price
 *       },
 *       {
 *         name: sortDirection,
 *         in: query,
 *         required: false,
 *         example: -1
 *       },
 *       {
 *         name: page,
 *         in: query,
 *         required: false,
 *         example: 0
 *       },
 *       {
 *         name: onPage,
 *         in: query,
 *         required: false,
 *         example: 5
 *       }
 *     ]
 *     responses:
 *       200:
 *         description: The car list.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SavedCar'
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.get(
  "/list",
  carGetListDto,
  paramsValidateMiddleware,
  carController.getCarList
);

/**
 * @swagger
 * /car:
 *   post:
 *     summary: Create a car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               car:
 *                 $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: The object with created car id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarId'
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.post(
  "/",
  carCreateDto,
  paramsValidateMiddleware,
  carController.createCar
);

/**
 * @swagger
 * /car/{id}:
 *   patch:
 *     summary: Change a car
 *     tags: [Cars]
 *     parameters: [
 *       {
 *         name: id,
 *         in: path,
 *         required: true,
 *         example: 63b6b851750ed2dd98750a76
 *       }
 *     ]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               car:
 *                 $ref: '#/components/schemas/Car'
 *     responses:
 *       200:
 *         description: The object with updated car id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarId'
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.patch(
  "/:id",
  carUpdateDto,
  paramsValidateMiddleware,
  carController.updateCar
);

/**
 * @swagger
 * /car/{id}:
 *   delete:
 *     summary: Delete a car
 *     tags: [Cars]
 *     parameters: [
 *       {
 *         name: id,
 *         in: path,
 *         required: true,
 *         example: 63b6b851750ed2dd98750a76
 *       }
 *     ]
 *     responses:
 *       200:
 *         description: The object with deleted car id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarId'
 *       400:
 *         description: Bad request error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ClientError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServerError'
 */
router.delete(
  "/:id",
  carDeleteDto,
  paramsValidateMiddleware,
  carController.deleteCar
);

export default router;
