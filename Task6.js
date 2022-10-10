/* მოცემული მასივიდან გამოიტანეთ მარტო ის ობიექტი რომლის checked სტატუსი არის true: */
const colorinfo = [
    {
        color: 'tomato',
        numbers: [125,235],
        checked: true
    },
    {
        color: 'green',
        numbers: [11,123],
        checked: false
    },
    {
        color: 'blue',
        numbers: [125,212],
        checked: true
    }
];

const result = colorinfo.filter(item => item.checked);
console.log(result);
