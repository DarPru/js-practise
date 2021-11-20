
/* sorting all odd elements in array
  pushing ones at thier original plases */
  

var arr = [1, 8, 37, 55, 97, 40, 37, 3, 8, 1];

console.log(trickySort(arr));

function trickySort(arr) {
  var odds = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      odds.push({index:i, value:arr[i]});
    }
  }
  
  odds.sort((a, b) => a.value - b.value);
  var indexes = odds.map(i => i.index).sort((a, b) => a - b);
 
  for (let i = 0; i < odds.length; i++) {
    arr[indexes[i]] = odds[i].value;
  }
 
  return arr;
}
