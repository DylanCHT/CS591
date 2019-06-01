const cube = x => x**3;
const func = num => num.map(x => cube(x));

let lst = [1,2,3,4,5,6,7];
console.log(`Cube value of list ${lst} : ${func(lst)}`);