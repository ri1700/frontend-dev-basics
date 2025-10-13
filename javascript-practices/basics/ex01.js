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
var b = new Boolean("hello world");
var o = {};
var a = [];
var n = null;


console.log("i:" + typeof(i)+ ":" + i);
console.log("s:" + typeof(s)+ ":" + s);
console.log("b:" + typeof(b)+ ":" + b); 
console.log("o:" + typeof(o)+ ":" + o);
console.log("a:" + typeof(a)+ ":" + a);
console.log("n:" + typeof(n)+ ":" + n);

console.log("===== [02-2] 객체 타입, function");
function f1() {
}

var f2 = function() {
}

var f3 = new Function();

console.log("f1:" + typeof(f1));
console.log("f2:" + typeof(f2));
console.log("f3:" + typeof(f3)); 