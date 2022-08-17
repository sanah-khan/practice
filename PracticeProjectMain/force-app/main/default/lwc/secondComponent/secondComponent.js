import { LightningElement } from 'lwc';

export default class SecondComponent extends LightningElement {
mySchool="What school did you attend?"
myColor="brand"
myText = "Please fill out the following Information. ASAP"
myListOfFood=["tikkas", "hotdog bites", "yogurt"]
mySchoolSupplies= ["notebook", "Pencils" , "pens"]
buttonClick(event){
    this.myColor="success"
    this.myText="Thank you for submitting the form!"
 this.mySchoolSupplies.forEach(schoolSupply => {
    console.log("12 "+schoolSupply)
this.myListOfFood.push(schoolSupply)
console.log(this.myListOfFood)
 });

}

}