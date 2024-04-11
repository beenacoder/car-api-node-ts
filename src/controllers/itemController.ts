import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item.service";

const getItem = async ({ params }: Request, res: Response) => {

    try {
        const { id } = params;
        const responseItem = await getCar(id);
        const data = responseItem ? responseItem : "NOT FOUND"
        res.send(data);
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEM")
    }
}

const getItems = async (req: Request, res: Response) => {

    try {
        const responseItem = await getCars();
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, "ERROR_GET_ITEMs")
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem)
    } catch (error) {
        handleHttp(res, "ERROR_POST_ITEMs", error)
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseItem = await updateCar(id, body);
        res.send(responseItem);

    } catch (error) {
        handleHttp(res, "ERROR_UPDATE_ITEMs")
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    const { id } = params;
    const responseItem = await deleteCar(id);
    res.send(responseItem);
    try {

    } catch (error) {
        handleHttp(res, "ERROR_DELETE_ITEMs")
    }
}

export { getItem, getItems, postItem, updateItem, deleteItem }