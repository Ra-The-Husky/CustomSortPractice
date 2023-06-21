function ageSort(users) {
  return users.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if(a % 2 !== 0 && b % 2 === 0){
      return -1
    }
    if(a % 2 === 0 && b % 2 !== 0){
      return 1;
    }
    return a - b;
  })
}
const arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
console.log(oddEvenSort(arr1))
function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
