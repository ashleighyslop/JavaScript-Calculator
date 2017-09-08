var memory = '0' //inital memory value
var current = '0' //initial current value
var op = 0 //records code for operations

//adding digit to display
function addDigit(digit){
  if ( current ==0 && current.indexOf('.') ==-1){
    current = digit;
  }else{
    current = current + digit;
  }
   document.Calculator.Display.value = current
}

//adding a decimal point
function decimal(){

  if (current == 0){
    current = '0.'
  }
 else {
   current = current + '.'
 }
 document.Calculator.Display.value = current
}

//changing if positive or negative
function positiveNegative(){
  if (current == 0){
    current = current
  }
  else{
    current = (current * (-1))
  }
  document.Calculator.Display.value = current
}

//operations
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

//excecuting

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
