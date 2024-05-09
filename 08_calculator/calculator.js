const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	let total=0
  for(const ele of arr){
    total+=ele
  }
  return total
};

const multiply = function(arr) {
  let prod=1;
  for(const ele of arr){
    prod*=ele
  }
  return prod
};

const power = function(base,pow) {
	return Math.pow(base,pow)
};

const factorial = function(n) {
	if(n==0||n==1){
    return 1
  }
  let ans=1;
  for(let i=1;i<=n;i++){
    ans*=i
  }
  return ans
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
