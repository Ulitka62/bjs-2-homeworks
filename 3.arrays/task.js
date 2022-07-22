function compareArrays(arr1, arr2) {
  let result = JSON.stringify(arr1) === JSON.stringify(arr2);
  return result; // boolean
  console.log(result);
}

function advancedFilter(arr) {
  let resultArr = arr.filter(item => item >= 0 && item % 3 === 0).map(item => item * 10);
  return resultArr; // array
  console.log(resultArr);
}
