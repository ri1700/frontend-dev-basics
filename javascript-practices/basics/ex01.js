console.log("===== [01] 기본 타입, primimitive type");
var u;
var i = 10;
var s = "hello";   
var b = true;

console.log("u:" + typeof(u)+ ":" + u);
console.log("i:" + typeof(i)+ ":" + i);
console.log("s:" + typeof(s)+ ":" + s);
console.log("b:" + typeof(b)+ ":" + b);


console.log("===== [02-1] 객체 타입, object type");
var i = new Number(10);
var s = new String("hello world");
var b = new Boolean(false);
var o = {};
var a = [];
var n = null;

console.log("i:" + typeof(i)+ ":" + (i instanceof (Number)));
console.log("s:" + typeof(s)+ ":" + (s instanceof (String)));
console.log("b:" + typeof(b)+ ":" + (b instanceof (Boolean))); 
console.log("o:" + typeof(o)+ ":" + (o instanceof (Object)));
console.log("a:" + typeof(a)+ ":" + (a instanceof (Array)));
console.log("n:" + typeof(n));


console.log("===== [02-2] 객체 타입, function");
function f1() {
}

var f2 = function() {
}

var f3 = new Function();

console.log("f1:" + typeof(f1) + ":" + (f1 instanceof(Function)));
console.log("f2:" + typeof(f2) + ":" + (f2 instanceof(Function)));
console.log("f3:" + typeof(f3) + ":" + (f3 instanceof(Function))); 


console.log("===== [03] 기본 타입과 유사객체");
var b1 = true;                  // new Boolean(true) 아님 (primitive)
var b2 = new Boolean(true);     // Boolean 객체 생성

console.log(b1.valueOf());      // new Boolean(b1).valueOf() 자동 호출함.
console.log(b2.valueOf());      // 정상 출력함.