// 原始数据类型：string，number，boolean，null，undefined，symbol
// 对象：对象，函数，数组
// 内置对象（包装类对象）：Number，Array，Object，String，Function，Boolean

var num = Number(1); // 值是原始数据类型
var num2 = new Number(1); // 值是对象
console.log(num);
console.log(num2);

// 原始数据类型值永远不会变
var a = 1;
a = 2;
console.log(a);

// 基本数据类型 保存在 栈内存，变量本身在栈中，变量一定有指针,指向一块数据源

// 说明变量有指针，基本数据类型也有自己对应的内存地址
var b = 1;
var c = 1;
c = 2;

var d = 1;
d.f = 123; // new Number(d).f = 123 立马销毁
console.log(d); // 1
console.log(d.f); // undefined 报错

var h = 1;
console.log( typeof h.toString());
// console.log(1.toString());
console.log((1).toString());
console.log(1.234532); // js引擎底层保存number的时候都认为是64位的浮点型