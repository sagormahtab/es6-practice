//Class was introduced with ES6
class Student{
    constructor(sId, sName){
        this.id = sId; //this.id = 3
        this.name = sName; //this.id = 'Jaleel'
        this.school = "Kolimunnesa Model School";
    }
}
const Student1 = new Student(12, "Jamal");
const Student2 = new Student(14, "Kamal");
const Student3 = new Student(42, "Bappy");
//console.log(Student1,Student2);
console.log(Student3);
console.log(Student1.name, Student2.name);