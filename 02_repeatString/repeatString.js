/*return a string which is number times of str*/
const repeatString = function(str,number) {
    if(number<0){
      return 'ERROR'
    }else{
      return str.repeat(number);
    }
};

// Do not edit below this line
module.exports = repeatString;
