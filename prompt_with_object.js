var obj = {name1: "Vasya", name2: "Petya", name3: "Igor"};
var prom = prompt("Введите имя игрока name1 2 or 3");
var value = obj[prom];
if(prom){
  console.log(value);}
else{
  console.log("Возвращает false, это неверный обьект " + prom);
}
console.log(obj.name2 + " " + obj["name3"]);