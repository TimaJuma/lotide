const words = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eva'];


// this function will behave as bilrd in map funtion, which takes an arrayas arguments and callback functio and applies it each single element of passed array
const map  = (array, callfunction) => {
  const results = [];
  for (item of array){
    results.push(callfunction(item));
  }
  return results;
}


const result1 = map(words, word => word[0]);
console.log(result1)