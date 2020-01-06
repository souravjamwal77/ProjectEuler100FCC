function fiboEvenSum(n) {
  // You can do it!
  var arr = [];

  for(var i = 1; i <= n; i++){
    if(arr.length <= 1){
      arr.push(i);
    }
    else if (arr.length > 1){
      arr.push((arr[arr.length - 2] + (arr[arr.length - 1])));
    }
  }
  
  var sumOfEvenValues = 0;
  for(var j = 0; j < arr.length; j++){
    if((arr[j] % 2) == 0){
      sumOfEvenValues += arr[j];
    }
  }
  console.log(sumOfEvenValues);
  return sumOfEvenValues;
}


fiboEvenSum(10);
fiboEvenSum(18);
fiboEvenSum(23);
fiboEvenSum(43);