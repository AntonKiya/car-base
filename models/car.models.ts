import { ObjectId } from "mongodb";
import { Car, CarBrand } from "@app-types/interfaces";

class CarModel {
  _id?: ObjectId;
  brand: string;
  model: string;
  year: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({ _id, brand, model, year, price, createdAt, updatedAt }: Car) {
    this._id = _id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

class CarBrandModel {
  _id?: ObjectId;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({ _id, name, createdAt, updatedAt }: CarBrand) {
    this._id = _id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { CarModel, CarBrandModel };
