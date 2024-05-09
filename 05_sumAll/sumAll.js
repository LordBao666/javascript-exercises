
/*num1 and num2 must be positive number,or this function will return ERROR
  call the larger one of num1 and num2 is max,
  call the smaller one of num1 and num2 is min
  We add numbers from min to max
*/
const sumAll = function(num1,num2) {
    if(!(typeof num1 ==='number' && typeof num2 ==='number')){
        return "ERROR"
    }
    if(num1<0 || num2<0){
      return "ERROR"
    }
    let min=num1<num2?num1:num2
    let max= num1 < num2 ? num2 : num1;
    let sum=0
    while(min<=max){
      sum+=min
      min++
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
