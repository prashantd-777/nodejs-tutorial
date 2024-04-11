
// const add = require("./add");

// console.log("Hello from index.js");
// const sum = add(1, 2);
// console.log("sum is::", sum);
// const sum2 = add(4, 5);
// console.log(sum2);


let SuperHero = require("./superHero");
let batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

let superman = new SuperHero("SuperMan");
console.log(superman.getName());


