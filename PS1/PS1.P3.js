
const app = (str, function1) => {
    return function1(str);
}
console.log(app(`supercalifragilisticexpialidocious`, str => str.split(/(?=c)/g))); 
console.log(app(`supercalifragilisticexpialidocious`, str => {
    var result = {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: (str.match(/a/g)||[]).length,
        length: str.length
    };
    return result;
}))
