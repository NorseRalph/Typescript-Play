import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
/// <reference types="@types/google.maps" />


 
