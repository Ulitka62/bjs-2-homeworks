/// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;
  for (let i=0; i<arr.length; i++){
    if (max<arr[i]){
      max=arr[i];
    }if (min>arr[i]){
      min=arr[i]
    };
    sum+=arr[i]; 
  }
  avg = sum/arr.length;
  avg = Number(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
};

// Задание 2
function worker(arr) {
  let sum=0;
for(let i=0;i<arr.length; i++){
  sum+=arr[i];
}

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
 
  for (let i=0; i<arrOfArr.length;i++){
    if (max<worker(arrOfArr[i])) {
      max = worker(arrOfArr[i]);
    }
  }
  return max;
};

// Задание 3
function worker2(arr) {
  let min = max = arr[0];

  for(let i=0;i<arr.length; i++){
    if (max<arr[i]){
      max=arr[i];
  }
  if (min>arr[i]){
  min=arr[i];
}
}
return max-min;
}

//worker
console.log(worker([1,2,3]));//6
console.log(worker([4,5,6]));//15
arrOfArr = [[1,2,3], [4,5,6]];
makeWork(arrOfArr,worker);//15

console.log(worker([10,10,11]));//31
console.log(worker([20,10]));//30
arrOfArr = [[10,10,11], [20,10]];
makeWork(arrOfArr,worker);//31

console.log(worker([0,0,0]));//0
console.log(worker([-1,-100]));//-101
arrOfArr = [[0,0,0], [-1,-100]];
makeWork(arrOfArr,worker);//0

//worker 2

console.log(worker2([-10,-20,-40]));//-40 - (-10) = -30 =>30
console.log(worker2([10,20,30]));//30 - 10 = 20
arrOfArr = [[-10,-20,-40], [10,20,30]];
makeWork(arrOfArr,worker2);//30

console.log(worker2([0,0,0]));//0 - 0 = 0
console.log(worker2([-1,-99]));//-99 -(-1) = -98 =>98
arrOfArr = [[0,0,0], [-1,-99]];
makeWork(arrOfArr,worker2);//98