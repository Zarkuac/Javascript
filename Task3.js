let array = [5,25,89,120,36];

array.push("Javascript","Python");
console.log(array);

array.unshift("HTML","CSS");
console.log(array); 

console.log(array.length);

const removeFirst = array.shift()
console.log(removeFirst);

const removeLast = array.pop()
console.log(removeLast);

console.log(array);
