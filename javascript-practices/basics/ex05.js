console.log("===== [01] 일반 함수");
var myFunction = function(){
    console.log("일반함수");
}

var o = new myFunction();
console.log(typeof(o));


console.log("===== [02] 생성자 함수");
var Myobject = function(name){
    console.log("Myobject construnctor called");
    this.name = name;
    this.age = this.age;
}

var o1 = new Myobject("둘리", 10);     // 새로운 객체를 만듬.
console.log("o:" + typeof(o1));
console.log(o1);

var o2 = new Myobject("또치", 20);     // 새로운 객체를 만듬.
console.log("o:" + typeof(o2));
console.log(o2);