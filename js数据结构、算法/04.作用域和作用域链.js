var a = 10;
function fun() {
    var a = 20;
    fun2();
}

function fun2() {
    console.log(a);
}

fun();

// 作用域是什么？？
/*
    作用域只是一个概念，产生的作用域只是函数在定义的时候，遵循了一套已有的规范

 */
// 作用域链是什么？？
/*
   真实存在的,
      作用链：scopeChain
        1. 数据结构：数组
        2. 数据放置的是： 变量对象
        3. 作用域链上的每一个节点保存的是变量对象
        4. 变量的查找规则：
            1. 先在当前作用域的变量对象中去找，如果有直接使用，如果没有，沿着作用域链去找
            2. 会找到上一级的作用域的变量对象
            3. 直到找到全局的变量对象，如果期间有就使用，如果还没有就报错。
 */

// var a = 10;
// function fun() {
//     var a = 10;
//     var b = 20;
//     function fun2() {
//         var c = 30;
//         function fun3() {
//             console.log(a,b,c);
//             console.log(d);
//         }
//
//         fun3();
//
//     }
//
//     fun2();
// }
//
// fun();

/**
  函数在定义的时候产生作用域：
        函数在定义的时候已经符合了已有的一种规范，这种规范用于规定之后链条节点有谁
 */

/**
  函数调用后，代码即将执行之前：
    1. 创建执行上下文对象，并进入执行上下文环境
    2. 定义变量对象
         var 变量对象vo = {
            变量,
            函数,
            函数的参数,
            this
         }
    3. 创建作用域链：【当前变量对象vo ，之前的变量对象】
    4. 压栈：压的是执行上下文对象，遵循栈数据结构的特点：先进后出，后进先出
 */

/*
   执行上下文
      1. 执行上下文环境
         -
      2. 执行上下文对象
      3. 执行上下文栈
 */


// var 变量对象vo = {
//     变量,
//     函数,
//     函数的参数,
//     this
// }

/*
  闭包：函数嵌套，内部函数引用外部函数局部变量
 */