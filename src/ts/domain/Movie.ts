import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: Array<string>,
        readonly time: string,

        readonly id: number,
        readonly author: string,
        readonly price: number,
    ) { }
}