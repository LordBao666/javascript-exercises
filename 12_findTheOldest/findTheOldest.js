const findTheOldest = function(people) {
    let maxAgePerson
    let maxAge=-1
    for(const person of people){
      let yearOfBirth=person.yearOfBirth
      let yearOfDeath=person.yearOfDeath
      let age
      if(typeof yearOfDeath==='undefined'){
        age = new Date().getFullYear() - person.yearOfBirth
      }else{
        age=person.yearOfDeath-person.yearOfBirth
      }

      if(maxAge<age){
        maxAgePerson=person
        maxAge=age
      }
    }
    return maxAgePerson

};

// Do not edit below this line
module.exports = findTheOldest;
