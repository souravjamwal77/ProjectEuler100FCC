function multiplesOf3and5(number) {
    // Good luck!

    //Define an empty array to hold all the numbers
    var arr = [];

    // for loop will iterate over all the values from 1 to 'number'
    for(var i=1; i< number; i++){
      if(i % 3 == 0){
        arr.push(i);
      }
      else if(i % 5 == 0){
        arr.push(i)
      }
    }

    // below function will add all the values and return us the result
    const arrSum = function(arr){
      return arr.reduce(function(a,b){
        return a + b
      }, 0);
    }

    var result = arrSum(arr);
    return result;
}
  
  
  
multiplesOf3and5(1000);

console.log(multiplesOf3and5(1000));