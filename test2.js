// 高阶函数
function fun1(a, b) {
    console.log(a);
    console.log(b)
}

function fun2(fn, a, b, c, d) {
    return function () {
        fn(a, b);
        console.log(c);
        console.log(d);
    }
}

let fn = fun2(fun1, 1,2,3 ,4);
fn(1,2,3,4);
