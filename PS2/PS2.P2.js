function* func2(str) {
    yield*  str.split(' ');
}

const str = `All I know is something like a bird within her sang`;
let x = func2(str);
let rst = x.next();

while(!rst.done){
    console.log(rst.value);
    rst = x.next();
}