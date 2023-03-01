const findTheOldest = function(people) {
    const today = new Date().getFullYear();
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(oldestPerson, today);
    const currentAge = getAge(currentPerson, today);
    return currentAge > oldestAge ? currentPerson : oldestPerson;
  });
}

function getAge(person, today) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    return today - person.yearOfBirth;
  }
    
};

// Do not edit below this line
module.exports = findTheOldest;
