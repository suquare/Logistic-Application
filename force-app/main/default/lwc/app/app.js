import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    genericInputChange(event){
        console.log('Street => ' , event.target.street);
        console.log('City => ' , event.target.city);
        console.log('Province => ' , event.target.province);
        console.log('Country => ' , event.target.country);
        console.log('postal Code => ' , event.target.postalCode);
    }
}