//Aqui implementamos toda la logica de negocio que se necesita, sin tocar el controlador.

import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/itemSchema";

const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert
};

const getCars = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem
}

const getCar = async (id: String) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem;
}

const updateCar = async (id: String, data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    );
    return responseItem;
}

const deleteCar = async (id: String) => {
    const responseItem = await ItemModel.deleteOne({ _id: id })
    return responseItem;
}
export { insertCar, getCars, getCar, updateCar, deleteCar };