//Inheritance also was introduced with ES6
class Parent{
    constructor(){
        this.fathername = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(cName){
        super(); //this one is needed for calling the parent class constructor
        this.name = cName;
    }
    getFullName(){//function inside the class doesn't need the function keyword
        return this.name + " " + this.fathername;
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);