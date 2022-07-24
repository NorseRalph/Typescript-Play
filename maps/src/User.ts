import faker from 'faker';
import { checker } from './Map';
export class User implements checker {
  public name: string
  location: {
    lat: number,
    lng: number
  };
  constructor(){
    this.name = faker.name.firstName();
    this.location= {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };  
  }

  markerContent(): string {
    return `<h1>Hello, my name is ${this.name}!<h1>`
  }
}