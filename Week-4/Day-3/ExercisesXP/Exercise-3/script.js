const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((total, current) =>(total += current + " "),"");
console.log("sentence:", sentence);