console.log("===== [01] undifined");
var i;  // 항상 변수 선언을 먼저 // 암시적으로 undefined가 대입
var i = undefined;             //  명시적으로 undefined를 대입

// if(1-1 < 10){
//     i = 10;
// }

// if(i){
//     console.log(i);
// }

console.log(i);

var myVar1;
var myVar2 = undefined;
var myVar3 = null;

console.log(myVar1, myVar2, myVar3);


console.log("===== [02] var");
// X; // ReferenceError: X is not defined
y = 10; // var를 생략해도 변수 정의가 된다.
var x;  // var를 사용해도 변수 정의가 된다.

console.log(x, y);


console.log("===== [03] undefined, null 비교");
console.log(myVar1 == myVar3);  // 값 비교, true
console.log(myVar1 === myVar3); // 타입 비교 + (값비교, 통일성), false

// == : equality, 값의 동치성, 형변환
console.log(4 == "4");              // true
console.log(0 == false);            // true
console.log(4 == new String('4'));  // true

// === : identity, 값의 일치성, 형변환 없음 -> 권장
// 1. 타입의 통일성
// 2. 타입이 동일한 경우
//    2-1. 기본 타입: 값의 동일성
//    2-2. 객체 타입: 객체의 동일성
console.log(4 === 5 - 2);                    // false
console.log(new Number(4) == new Number(4)); // false

o2 = {};
o3 = o2;

console.log(o2 == o3);   // true