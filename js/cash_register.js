let calc = Calculator();
let display = register("display");
let balance = 0;
let drawer = 0;
let stored = 0;
let operation = "";


//===================================================================

function register(x){

  return document.getElementById(x);
};

function clearDisplay(){

     return display.innerHTML = "";
  };

 /*
=====================================================================
DIGITS
 */
register("nine").addEventListener('click',function(){
  display.innerHTML += 9;
});

register("eight").addEventListener('click',function(){
  display.innerHTML += 8;
});

register("seven").addEventListener('click',function(){
  display.innerHTML += 7;
});

register("six").addEventListener('click',function(){
  display.innerHTML += 6;
});

register("five").addEventListener('click',function(){
  display.innerHTML += 5;
});

register("four").addEventListener('click',function(){
  display.innerHTML += 4;
});

register("three").addEventListener('click',function(){
  display.innerHTML += 3;
});

register("two").addEventListener('click',function(){
  display.innerHTML += 2;
});

register("one").addEventListener('click',function(){
  display.innerHTML += 1;
});

register("zero").addEventListener('click',function(){
  display.innerHTML += 0;
});

register("deci").addEventListener('click',function(){
    display.innerHTML += '.';
  });



/* 
===================================================================
OPERATORS
*/

register("plus").addEventListener('click',function(){
    let add = parseFloat(display.innerHTML);
    calc.load(add);    
    clearDisplay();
    operation = "add";
  })

  register("minus").addEventListener('click', function(){
      let subtract = parseFloat(display.innerHTML);
      calc.load(subtract);
      clearDisplay();
      operation = "subtract";
  })

  register("multiply").addEventListener('click', function(){
      let multiply = parseFloat(display.innerHTML);
      calc.load(multiply);
      clearDisplay();
      operation = "multiply";
  })

  register("divide").addEventListener('click', function(){
      let divide = parseFloat(display.innerHTML);
      calc.load(divide);
      clearDisplay();
      operation = "divide";
  })



  register("equal").addEventListener('click',function(){
    stored = parseFloat(display.innerHTML); 
      
      switch(operation){
  
        case 'add': calc.add(stored);
          break;
  
        case 'subtract': calc.subtract(stored);
          break;
  
        case 'multiply': calc.multiply(stored);
          break;
  
        case 'divide': calc.divide(stored);
          break;
        }
  
      display.innerHTML = calc.returnTotal();
        
  
  });

/*
===========================================================================
REGISTER BUTTONS
*/

register("clear").addEventListener('click',function(){
    clearDisplay();
});

register("balance").addEventListener('click',function(){

    stored = parseFloat(display.innerHTML);
    display.innerHTML = drawer;

  });

register("deposit").addEventListener('click',function(){

    stored = parseFloat(display.innerHTML);
    drawer += stored;
    clearDisplay();

  });

register("withdraw").addEventListener('click',function(){

    stored = parseFloat(display.innerHTML);
    display.innerHTML = (drawer -= stored);
    clearDisplay();
  
  });





