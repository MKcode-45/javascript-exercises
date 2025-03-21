const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a -b;
};

const sum = function(n) {
	return n.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue ;
  }, 0);
};

const multiply = function(n) {
	return n.reduce((accumulator, currentValue) =>{
    return accumulator * currentValue ;
  });
};


const power = function(a,b) {
  return a**b;
};

const factorial = function(f) {
	if(f === 0){
    return 1;
  }

  let result = 1;
  for(f; f > 0; f--){
    result *= f;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
