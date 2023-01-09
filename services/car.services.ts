import { CarRepository } from "@repository";
import { CarModel } from "@models";
import { BadRequestError, NotFoundError, ServerErrorError } from "@errors";
import {
  GetListRequest,
  GetListResponse,
  Car,
  CarBrand,
} from "@app-types/interfaces";

const carRepository = new CarRepository();

export class CarServices {
  constructor() {}

  async getCarList(
    query: GetListRequest
  ): Promise<GetListResponse<Array<Car>>> {
    const carList = await carRepository.getCarList(query);

    const carCount = await carRepository.getCarCount(query);

    return {
      data: carList,
      totalCount: carCount,
    };
  }

  async createCar(car: Car): Promise<string> {
    await this.isBrandCorrect(car.brand);

    const { insertedId: id } = await carRepository.createCar(
      new CarModel({
        ...car,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );

    if (!id) {
      throw new ServerErrorError(`Car is not saved`);
    }

    return id.toString();
  }

  async updateCar(car: Car): Promise<string> {
    await this.isBrandCorrect(car.brand);

    const { value } = await carRepository.updateCar(
      new CarModel({
        ...car,
        updatedAt: new Date(),
      })
    );

    if (!value?._id) {
      throw new NotFoundError(`Car with id ${car._id} is not found`);
    }

    return value._id.toString();
  }

  async deleteCar(id: string): Promise<string> {
    const { value } = await carRepository.deleteCar(id);

    if (!value?._id) {
      throw new NotFoundError(`Car with id ${id} is not found`);
    }

    return value._id.toString();
  }

  async getCarBrands(): Promise<Array<CarBrand>> {
    return carRepository.getCarBrands();
  }

  async isBrandCorrect(brand: string): Promise<never | void> {
    const brands = (await this.getCarBrands()).map((brand) => brand.name);

    if (!brands?.includes(brand)) {
      throw new BadRequestError(`Car brand «${brand}» is not found`);
    }
  }
}
