import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly img: string,
    readonly name: string,
    readonly quality: string,
    readonly EngName: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genres: [string, string, string, string, string],
    readonly time: string,
    readonly price: number,
  ){}
}