try{
  var n = Number(prompt("Введите положительное число", ""));
  var f = factorial(n);
  alert(n + "! = " + f);
}
catch(ex){
  alert(ex);
}
