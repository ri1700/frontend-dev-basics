/**
 * Scope
 */

console.log("===== [01] lexical scope")
// var : 변수를 정의할때 사용
var f1 = function(){
    var s = "hello world";

    var inner = function(){
        console.log(s);
    }
    inner();
}

f1();


console.log("===== [02] closure")
// java script에서 closure는 함수가 선언될 때의 렉시컬 환경을 기억하는 함수
var f2 = function(){
    var s = "world hello";

    var inner = function(){
        console.log(s);
    }
    return inner;
}

var closure = f2();
closure();  // f2()가 종료된 이후에도 inner()가 s에 접근 가능