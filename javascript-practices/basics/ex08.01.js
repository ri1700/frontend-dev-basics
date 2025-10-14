console.log("===== [01] 배열의 생성: 내장객체(생성자 함수)");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof(Array), a1.length);

// 생성자 함수의 파라미터 갯수가 1인 경우 : 크기
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof(Array), a2.length);

// 배열의 크기를 지정하는 것은 아무 의미가 없다.
a2[0] = 0;
a2[1] = "hello";
a2[10] = {};
console.log(a2, a2.length);

// 생성자 함수의 파라미터 갯수가 2개 이상인 경우 : 배열 초기화
var a3 = new Array(0, "hello", {});
console.log(a3, a3.length);


console.log("===== [02] 배열의 생성: 리터럴");
var a4 = [];
console.log(typeof(a4), a4 instanceof(Array), a4.length);

var a5 =[10, "JavaScript", {
    name: "둘리",
    age: 10
},  function(){
    console.log("hello world");
},  null];

a5[3]();    // 체크


console.log("===== [03] 배열 순회");
for(var i=0; i<a5.length; i++){
    console.log(i, a5[i]);
}


console.log("===== [04] [] vs {}");
var a6 = [];
a6[0] = 0;
a6["1"] = 1;
a6["2"] = 2;
a6["name"] = "또치";
a6["age"] = 10;
a6.length = 5;   // length 속성은 자동으로 관리되므로 임의로 변경하지 말 것

console.log(a6[0], a6[1], a6[2],a6["name"], a6["age"], a6.length);

var b6 = {};
b6[0] = 0;
b6["1"] = 1;
b6["2"] = 2;
b6["name"] = "둘리";
b6["age"] = 10;
b6.length = 5;   // length 속성은 자동으로 관리되므로 임의로 변경하지 말 것

console.log(b6[0], b6[1], b6[2], b6.name, b6.age ,b6.length);

s = "name";
console.log(b6[s]);    // 체크


console.log("===== [05] for ~ in: {}");
for(var prop in b6){
    console.log(prop + ":" + b6[prop]);
}

for(var i=0; i<b6.length; i++){
    console.log(i + ":" + b6[i]);
}