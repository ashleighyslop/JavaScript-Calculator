/* JS code using functions for a calulator. The variables memory, current and op represent the stored value, current value
and a code for executing the +,-,*,/ operations.*/



var memory = '0' //inital memory value
var current = '0' //initial current value
var op = 0 //records code for operations

//function for adding digit to display
function addDigit(digit){
  if ( current ==0 && current.indexOf('.') ==-1){
    current = digit;
  }else{
    current = current + digit;
  }
   document.Calculator.Display.value = current
}

//function for adding a decimal point
function decimal(){

  if (current == 0){
    current = '0.'
  }
 else {
   current = current + '.'
 }
 document.Calculator.Display.value = current
}

//function for changing if value positive or negative
function positiveNegative(){
  if (current == 0){
    current = current
  }
  else{
    current = (current * (-1))
  }
  document.Calculator.Display.value = current
}

/*changing the caluclator display when the operation buttons are pressed.
This will also change the memory and current values as required. 'op' is used as a key
for later when the operations are required.*/
function operations(val){

if (current == 0){
  current = current
}

else if (val=='+'){
  memory = current
  current = ''
  op = 1;
}

else if (val=='-'){
  memory = current
  current = ''
  op = 2;
}

else if (val=='*'){
  memory = current
  current = ''
  op = 3;
}

else {
  memory = current
  current = ''
  op = 4;
}
 document.Calculator.Display.value = val

}

//function to execute the required operations i.e. when the '=' button is pressed.
//uses the value of 'op' to do this.
function execute(op){

  if (op == 1){
    var sum = (parseFloat(current) + parseFloat(memory))
    current = sum
  }
  else if (op == 2){
    var minus = (parseFloat(memory) - parseFloat(current))
    current = minus
  }
  else if (op == 3){
    var mult = (parseFloat(current) * parseFloat(memory))
    current = mult
  }
  else {
    var div = (parseFloat(memory) / parseFloat(current))
    current = div
  }

  document.Calculator.Display.value = current
}

//function to clear the current and memory values. returns '0' on calc dislpay
function clearAll(){
  if (current ==0){
    current = current
  }
  else{
    current ='0';
    memory = '0';
  }
document.Calculator.Display.value = current
}
