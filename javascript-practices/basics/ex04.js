console.log("===== [01] 생성 방법1: 생성자 함수");
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "또치";
o1.another.age = 20;  

console.log(o1);


console.log("===== [02] 생성 방법2: 리터럴");
var o2 = {};
o2.name = "마이콜";
o2.age = 10;
o1.another = new Object();
o1.another.name = "또치";
o1.another.age = 20;  

console.log(o2);


console.log("===== [03] 생성 방법3: JSON(JavaScript Object Notation)");
var o3 = {
    name: "도우너",
    age: 10,
    another: {
        name: "또치",
        age: 20
    }
};

console.log(o3);

console.log("===== [참고] JSON 포맷은 데이터 통신(AJAX) : xmlHttpRequest");
var response = "{name: '도우너', age: 10, email: 'dounu@gmail.com'}";
var user = eval("(" + response + ")");

console.log(user);