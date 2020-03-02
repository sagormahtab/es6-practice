//three dot which is also known as spread operator
const ages = [12, 14, 16, 27];
const ages2 = [23, 18];
const ages3 = [35, 27, 38, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3); //old method to concatenate two array
const allAges2 = [ages, ages2, 5, ages3];//this one didn't concatenate all of them properly
const allAges3 = [...ages, ...ages2, 5, ...ages3];
const business = 650;
const minister = 730;
const sochib = 700;
const takaPoysha = [230, 450, 732];
//const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoysha);//ES6 feature
console.log(maximum);