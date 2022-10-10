let array = ["hello",125,"Javascript","Html",43,"css","scss","boostrap",88,59,125,"Python"];
let onlyNumbers = array.filter(
    element => typeof element === 'number'
);
console.log(onlyNumbers);

/* filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები */
