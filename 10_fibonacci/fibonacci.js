const fibonacci = function(num) {
  let count
  if(typeof num === 'number'){
    count=num
  }else{
    count=+num
  }

  if(count<0) return "OOPS"
  if(count===0) return 0
  if(count===1 || count===2) return 1
  
  let first=1
  let second=1
  let j=3
  while(j<=count){
    let temp = second
    second=first+second
    first=temp
    j++
  }
  return second
};

// Do not edit below this line
module.exports = fibonacci;
