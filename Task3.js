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

/* შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
დაბეჭდეთ მასივისი ახალი ელემენტები.  */
