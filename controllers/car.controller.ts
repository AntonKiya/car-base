import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { CarServices, ErrorServices } from "@services";
import { GetListRequest, Car } from "@app-types/interfaces";
import { StatusCode } from "@app-types/enums";

const carServices = new CarServices();
const errorServices = new ErrorServices();

export class CarController {
  constructor() {}

  async getCarList(req: Request, res: Response): Promise<void> {
    try {
      const query: GetListRequest = req.query;

      const carListData = await carServices.getCarList(query);

      res.setHeader("X-Total-Count", carListData.totalCount);
      res.status(StatusCode.OK).json(carListData.data);
    } catch (e) {
      const errorInfo = errorServices.getErrorInfo(e);

      res.status(errorInfo.code).json({ error: errorInfo });
    }
  }

  async createCar(req: Request, res: Response): Promise<void> {
    try {
      const car: Car = req.body?.car;

      const id = await carServices.createCar(car);

      res.status(StatusCode.CREATED).json({ id });
    } catch (e) {
      const errorInfo = errorServices.getErrorInfo(e);

      res.status(errorInfo.code).json({ error: errorInfo });
    }
  }

  async updateCar(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const car: Car = req.body?.car;

      const carId = await carServices.updateCar({
        ...car,
        _id: new ObjectId(id),
      });

      res.status(StatusCode.OK).json({ id: carId });
    } catch (e) {
      const errorInfo = errorServices.getErrorInfo(e);

      res.status(errorInfo.code).json({ error: errorInfo });
    }
  }

  async deleteCar(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const carId = await carServices.deleteCar(id);

      res.status(StatusCode.OK).json({ id: carId });
    } catch (e) {
      const errorInfo = errorServices.getErrorInfo(e);

      res.status(errorInfo.code).json({ error: errorInfo });
    }
  }
}
