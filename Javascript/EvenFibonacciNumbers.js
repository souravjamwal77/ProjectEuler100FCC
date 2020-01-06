function fiboEvenSum(n) {
  // function to check the sum of all even-valued Fibonacci Numbers

  // Empty array to hold all Fibonaccu Numbers
  var arr = [];

  // for loop will iterate over every number and add fibonacci numbers in array list
  for(var i = 1; i <= n; i++){
    if(arr.length <= 1){
      arr.push(i);
    }
    else if (arr.length > 1){
      arr.push((arr[arr.length - 2] + (arr[arr.length - 1])));
    }
  }
  
  var sumOfEvenValues = 0;

  // Adding all even valued terms from Fibonacci Numbers
  for(var j = 0; j < arr.length; j++){
    if((arr[j] % 2) == 0){
      sumOfEvenValues += arr[j];
    }
  }
  console.log(sumOfEvenValues);
  return sumOfEvenValues;
}

// checking all the problems
fiboEvenSum(10);
fiboEvenSum(18);
fiboEvenSum(23);
fiboEvenSum(43);