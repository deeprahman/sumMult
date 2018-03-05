"use strict";

var target, sum, total;
target = 999 // Upper limit of multiples


function multiples(num, limit) {
  sum = 0;
  for (var i = 1; i*num <= limit; i++) {
    sum= sum +(i*num);
  }
  return sum;
}

console.log(multiples(3,target));
console.log(multiples(5,target));
console.log(multiples(15,target));

total = multiples(3,target) + multiples(5,target) - multiples(15,target);

console.log(total);
alert(total);
