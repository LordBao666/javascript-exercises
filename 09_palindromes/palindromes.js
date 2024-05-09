const palindromes = function (str) {
  let arr=str.toUpperCase().split("").filter(ele =>  ('A'<=ele &&ele<='Z')||('0'<=ele &&ele<='9') )
  let i=0,j=arr.length-1;
  while(i<j){
    if(arr[i]!==arr[j]){
      return false
    }
    i++
    j--
  }
  return true

};

// Do not edit below this line
module.exports = palindromes;
