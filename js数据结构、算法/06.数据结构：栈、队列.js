// 栈结构
/*
     先进后出，后进先出
 */
var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(i); // [0,1,2,3,4,5]
}

console.log(arr);

// for (var i = 0; i < 5; i++) {
//     arr.pop();
// }

// 队列
/*
   先进先出，后进后出
 */
for (var i = 0; i < 5; i++) {
    arr.shift();
}
