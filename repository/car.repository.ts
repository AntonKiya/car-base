import { ObjectId } from "mongodb";
import { db } from "@connectors";
import { Car, CarBrand, GetListRequest } from "@app-types/interfaces";

export class CarRepository {
  constructor() {}

  getCarList(query: GetListRequest): Promise<Array<Car>> {
    const filter = {
      $or: [
        { brand: { $regex: query.search || "" } },
        { model: { $regex: query.search || "" } },
      ],
    };

    const options = {
      sort: {
        [query.sortBy || "_id"]: query.sortDirection || 1,
      },
      limit: query.onPage || 5,
      skip: (query.onPage || 5) * (query.page || 0),
    };

    return db.collection<Car>("cars").find(filter, options).toArray();
  }

  createCar(car: Car) {
    return db.collection("cars").insertOne(car);
  }

  updateCar(car: Car) {
    const { _id, brand, model, year, price, updatedAt } = car;

    return db.collection("cars").findOneAndUpdate(
      { _id },
      {
        $set: {
          brand,
          model,
          year,
          price,
          updatedAt,
        },
      }
    );
  }

  deleteCar(id: string) {
    return db.collection("cars").findOneAndDelete({ _id: new ObjectId(id) });
  }

  getCarBrands(): Promise<Array<CarBrand>> {
    return db.collection<CarBrand>("car-brands").find().toArray();
  }

  async getCarCount(query: GetListRequest): Promise<number> {
    const filter = {
      $or: [
        { brand: { $regex: query.search?.toLowerCase() || "" } },
        { model: { $regex: query.search?.toLowerCase() || "" } },
      ],
    };

    return (await db.collection<Car>("cars").find(filter).toArray()).length;
  }
}
