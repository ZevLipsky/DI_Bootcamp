------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//an array with bread, carrot, potato, chicken apple , range
------2------
const country = "USA";
console.log([...country]);
//an  arry USA
------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//an array with two seperations