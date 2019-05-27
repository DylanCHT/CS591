const getOperation = str => {
	switch (str[1]) {
	 	case '+':
	 		return (left, right) => str[0] + str[2];
	 	case '-':
	 		return (left, right) => str[0] - str[2];
	 	case '%':
	 		return (left, right) => str[0] % str[2]:
	 	case '/'
	 		return (left, right) => str[0] % str[2]:
    }
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`) 
//let mathFunction = getOperation('+');
//console.log(mathFunction(30,12))

