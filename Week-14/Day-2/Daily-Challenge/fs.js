// reate an fs.js file and use the Node js File System to read the RightLeft file. 
// In the file, you will see a list of symbols : > and <. Each one of this symbol has a meaning:
// > means that you move 1 step to the right
// < means that you move 1 step to the left
const fs = require('fs');

const characters = fs.readFileSync('RightLeft.txt', 'utf-8', (err)=>{
    if (err) {
        console.log(err);
    }
}).split("");

let position = 0;
let step = 0;
let stepOfFirstMinusOne = null;
for(const character of characters){
   if(character != "<" && character != ">"){
    console.log("This characher is wrong lets skip it");
    continue;
   }
   const difference = character === "<" ? -1 : 1;
   position += difference;
   step++;
   if(position === -1 && stepOfFirstMinusOne === null){
    stepOfFirstMinusOne = step;
    console.log("we hit -1 ! current step is ", stepOfFirstMinusOne);
   }
}

let leftOrRight;
if(position < 0){
    leftOrRight =" left"
}else if(position>0){
    leftOrRight = "right"
}else{
    leftOrRight = ""
}
console.log(`The position is ${Math.abs(position)}, to the ${leftOrRight}`);
