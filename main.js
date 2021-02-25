let result = document.getElementById("result");

function edit(elem){
 result.value = result.value + elem.value;
}
function calc() {
 if (result.value === ""){
    result.value = "";
  }
  else{
    result.value = new Function("return " + result.value)();
  }
 }
 function reset(){
  result.value = "";
  elem.value = "";
 }
