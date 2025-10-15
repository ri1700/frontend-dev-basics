/**
 * 자바 스크립트 함수
 */

console.log("===== [01] 함수 생성(정의) 방법: literall")
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), (f1 instanceof Function), f1(10, 20));


console.log("===== [02] 함수 생성(정의) 방법: literal2")
var f2 = function(a, b){
    return a + b;
}
console.log(typeof(f2), (f2 instanceof Function), f2(10, 20));


console.log("===== [03] 함수 생성(정의) 방법: literall")
var f3 = new Function("a", "b", "return a + b;");
console.log(typeof(f3), (f3 instanceof Function), f3(10, 20));


console.log("===== [04] 함수 생성(정의) 방법: 익명 함수")
setTimeout(function(){
    console.log("hello");
}, 1000);


console.log("===== [05] 함수 생성(정의) 방법: 즉시 실행 함수");
(function(a, b){
    return a + b;
})(10, 20);


console.log("===== [06] 가변 파라미터");

var sum = function(){  
    var sum = 0;

    // 구현 1번
    // for(var i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }
    // console.log(arguments);

    // 구현 2번 : 오류, arguments는 배열이 아님
    // console.log(typeof(arguments), (arguments instanceof Array), arguments.forEach)
    // arguments.foreach(function(e){
    //     sum+=e;
    // }

    // Array.prototype.forEach 직접 호출 + this 바꾸기
    Array.prototype.forEach.call(arguments, function(e){
        sum+=e;
    });

    return sum;
}

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1 ,2 ,3 ,4 ,5, 6, 7, 8, 9, 10));


console.log("===== [07] caller(this) 바꾸기");
var myObject = {
    v: 'hazard',
    f1: function(){
        console.log(this.v);
    },
    f2: function(param){
        console.log(param + ' ' + this.v);
    }
};

// 일반적인 객체의 함수 호출
myObject.f1();

// apply: 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꿔서 그 함수를 즉시 호출한다.
myObject.f1.apply({v: 'you'});

// call: 호출되는 함수의 this를 첫번째 파라미터로 전달되는 객체로 바꿔서 그 함수를 즉시 호출한다. (두번째 파라미터부터 호출되는 함수의 파라미터로 전달할 수 있다.)
myObject.f2.call({v: 'you'}, 'hello');

// bind: 호출 되기전의 함수의 this를 파라미터로 전달되는 객체로 바인딩만 한다. (즉시 호출 x)
var f3 = function(){
    console.log(this.v);
}.bind(myObject);

f3();