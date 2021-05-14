// //=== 柯里化
// function mul(x) {
//     return function (y) {
//         return function (z) {
//             return x * y * z;
//         };
//     };
// };


// //=== 使一个数组为空
// let arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
// let arrayNew = arrayList;
// // arrayList.length = 0;
//
// // while (arrayList.length){
// //     arrayList.pop();
// // }
//
// arrayList.splice(0, arrayList.length);
//
// console.log(arrayNew);


// //=== 判断是否为数组
// let arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
// // if (Object.prototype.toString.call(arrayList) === '[object Array]') {
// //     console.log('Array!');
// // }
//
// if (Array.isArray(arrayList)) {
//     console.log('Yes!');
// }


// foo(); // Here foo is still undefined
// var foo = function foo() {
//     return 12;
// };


// var salary = "1000$";
//
// (function () {
//     console.log("Original salary was " + salary);
//
//     var salary = "5000$";
//
//     console.log("My New Salary " + salary);
// })();


var counterArray = {
    A : 3,
    B : 4
};
counterArray["C"] = 1;

console.log(Object.keys(counterArray).length);

function getLength() {
    let num = 0;
    for (let counterArrayElement in counterArray) {
        if (counterArray.hasOwnProperty(counterArrayElement)) {
            num++;
        }
    }
    return num;
}

console.log(getLength());

console.log(Object.getOwnPropertyNames(counterArray).length);