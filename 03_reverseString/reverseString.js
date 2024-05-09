/* return the reverse string of  str*/
const reverseString = function(str) {
  let strArr=str.split("")
  let len =strArr.length
  let i=0,j=len-1
  while(i<j){
    let strTemp = strArr[i]
    strArr[i]=strArr[j]
    strArr[j]=strTemp
    i++
    j--
  }

  return strArr.join("")
};

//Having checked the answer,it is really nice
//return string.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
