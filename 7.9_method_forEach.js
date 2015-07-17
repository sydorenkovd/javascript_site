var a = [1, 2, 4 ,5 ,6 , 7, 4];
var sum = 0;
a.forEach(function(value){
  sum += value;
});
console.log(sum);
a.forEach(function(v, i ,a){
  a[i] = v + 1;
});
console.log(a);
a.forEach(function(value){
  sum += value;
});
console.log(sum);