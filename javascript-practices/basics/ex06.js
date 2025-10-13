var o = {
    name : "둘리",
    age : 10,
};

var f = function(){
    console.log("hello world");
}

console.log("===== [01] object 타입의 확장");
o.another = {
    name : "마이콜",
    age : 20,
    print: function(){
        console.log(this.age + ":" + this.name);
    }
};

o.another.print();


console.log("===== [02] function 타입의 확장");
f.another = {
    name : "또치",
    age : 30,
    print: function(){
        console.log(this.age + ":" + this.name);
    }
};

f.another.print();


console.log("===== [03] 기본 타입(primitive type)의 확장할 수 없다.");
var i1 = 10;
var i2 = new Number(20);

console.log(i1 + ":" + i2 + ":" + (i1 + i2));
i2.another = {
    name : "또치",
    age : 30,
};

console.log(i2.valueOf());

i1.another= {};
console.log(i1.valueOf());