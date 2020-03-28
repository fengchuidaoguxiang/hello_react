// 二叉树算法

// 快速排序思想：选取基点：中间点的值去和数组剩下的每一项值比较，快速的分成两个数组：左边（小），右边（大）

var arr = [3,6,2,5,7,4,1];
function quickSort( arr ) {
    // 判断目标数组的length
    if(arr.length <= 1){
        return arr;
    }
    // 选取基点和基点值
    var flag = Math.floor(arr.length / 2); // 获取基点下标
    var flagValue = arr.splice(flag, 1)[0];
    // console.log(flagValue);
    // console.log(arr);

    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if(flagValue > arr[i]){
            left.push(arr[i]);
        }else { // 大于等于
            right.push(arr[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    return left.concat( flagValue ,right);

}

console.log(quickSort(arr));