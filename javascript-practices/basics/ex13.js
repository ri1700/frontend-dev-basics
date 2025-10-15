/**
 * 전역 객체(global object)
 * 
 * node: global
 * browser: window
 */

global.n = "둘리";
console.log(global.n, n);

m = "또치";
console.log(global.m, m);

// var 키워드로 선언한 전역 변수는 global 객체의 프로퍼티가 된다.
var e = "희동이";
console.log(global.e, e);