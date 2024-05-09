/*remove eles from arr */
const removeFromArray = function(arr,...eles) {
    
    for(const ele of eles){
      arr=arr.filter(t=>t!==ele)
    }
    return arr
};

// Do not edit below this line  
module.exports = removeFromArray;
