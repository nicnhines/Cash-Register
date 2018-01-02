let total = 0;
// let _memory = 0;

function Calculator(){
 
  
  function load(x){
    total = x;
    return total;
  }
  function add(x){
    total += x;
  }
  function subtract(x){
    total -= x;
  }
  function multiply(x){
    total *= x;
  }
  function divide(x){
    total /= x;
  }
  
  function returnTotal(){
     return total;
  }

  return{
  load: load,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  returnTotal: returnTotal
  };
}