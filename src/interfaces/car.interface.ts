//Declaracion de una propiedad y un tipo de dato para car

export interface Car {
    name: string,
    color: string,
    motor: "combustion" | "electric",
    year: number,
    description: string,
    price: number,
}