function add(num1, num2=0){ //ES6 method for default value
    //if(num2 == undefined){num2 = 0}; //old method
    //num2 = num2 || 0; //also old method
    return num1 + num2;
}

const total = add(15,23);
console.log(total);