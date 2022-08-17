import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {

    buttonColor = "brand";
   buttonLabel = "Next"
    myName = "Name:"

    handleClick(event){
        this.myName = "Age"
        
    this.buttonColor = "inverse"

    console.log("First Button Color "  +  this.buttonColor)

    this.buttonColor = "success"


    this.buttonLabel = "Done" 
 }
 handleNameChange(event){
 console.log("event")

}
}