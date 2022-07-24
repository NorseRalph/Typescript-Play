import faker from 'faker';
import { checker } from './Map';

 export class Company implements checker {
    companyName: string;
    catchPhrase: string;
    location: {
      lat: number,
      lng: number
    };

    constructor() {
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhrase();
      this.location= {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude())
      };
    }

    markerContent(): string {
      return `<div>
              <h1>Hi, our name is ${this.companyName}</h1>!
              <h3>and we will bring ${this.catchPhrase}</h3>
              </div>`;
    };
};