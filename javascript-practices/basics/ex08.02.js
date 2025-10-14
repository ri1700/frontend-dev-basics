/**
 * Array 객체 함수 : Array.prototype.
 */

var colors = ["red", "green", "blue"];
var fruits = ["apple", "banana", "mango"];  

console.log("===== [01] concat");
var a1 = fruits.concat(colors);
console.log(a1);


console.log("===== [02] stack 지원");
var color = colors.pop();
console.log(color, colors);

colors.push("red");
console.log(colors);


console.log("===== [03] join");  
var s = fruits.join(":");
console.log(s);


console.log("===== [04] reverse");
console.log(fruits);
fruits.reverse();
console.log(fruits);


console.log("===== [05] sort");
var numbers = [100, 200, 300, 400, 500];
var number = numbers.shift();
console.log(number, numbers);


console.log("===== [06] slice");
var numbers2 = numbers.slice(1,3);
console.log(numbers, numbers2);


console.log("===== [07] splice(index, count)");   
var fruits2 = fruits.splice(0,2);   // index 1부터 1개 삭제
console.log(fruits, fruits2);


console.log("===== [08] splice(index, count, replace)");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a1, a2);


console.log("===== [09] splice: removeAt");
var a3 = [0, 1, 2, 3, 4];
a3.splice(2,1);             // removeAt(2) -> 2만 빼고 싶을때
console.log(a3);


console.log("===== [10] splice: insert");
var a4 = [0, 1, 2, 3, 5];
a4.splice(4,0,4);           // insert(4, 4) -> 4번째 자리에 4를 넣고 싶을때
console.log(a4);


console.log("===== [11] sort");
var a5 = [1, 100, 10, 20, 3, 4, 200];
a5.sort();     // 문자열로 변환 후 정렬
console.log(a5);
a5.sort(function(a, b){   // 숫자 정렬
    return a - b;
});
console.log(a5);    