const sortAlph = str => [...str].sort().join('').replace(/\d+/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log(`New order: ${sortAlph("supercalifragilisticexpialidocious")}`);