// //leetcode question No.1 
// // find the target number and return the index of target number

// const { init } = require("express/lib/application")

// // let GiveArray = [3, 4, 5, 6, 7, 8, 11]
// // let target = 88;

// // function Findtarget(arr, target) {
// //     for (i = 0; i < arr.length; i++) {
// //         for (j = i + 1; j < arr.length; j++) {
// //             if (arr[i] * arr[j] == target) {
// //                 return [i, j]
// //             }
// //         }
// //     }
// //  return []
// // }
// // console.log(Findtarget(GiveArray,target))






// var addTwoNumbers = function(l1, l2) {
//     let dummy=new ListNode();
//     let temp=dummy;
//     let sum=0;

//     while(l1||l2||sum){
//         if(l1){
//             sum+=l1.val
//             l1=l1.next
//         }
//         if(l2){
//             sum+=l2.val
//             l2=l2.next
//         }
//         const remainder=sum%10
//         sum=Math.floor(sum/10)
//         temp.next=new ListNode(remainder)
//         temp=temp.next
//     }
//     return dummy.next
// };


// let Name = "First Name"
// console.log(Name)

// function Calsum(f, s) {
//     let result = f + s
//     return result
// }
// console.log(Calsum(-77, 98))
// // find the area of rectangle 
// let w = 240;
// let h = 91;
// function CalArea(w, h) {
//     if (w > 0 && h > 0) {
//         let area = w * h;
//         return `Rectangle area==>${area}`
//     } else {
//         return "Positive values are only allowed!"
//     }

// }
// console.log(CalArea(w, h))
// // function that check the given number is even or odd

// var num = prompt("enter number..");
// function Checker(n) {
//     if (n % 2 == 0) {
//         return "Number is Even"
//     } else {
//         return "Number is odd"
//     }
// }
// console.log(Checker(num))

//take three input and return the smallest number from them...

// function SmallestNumber(a, b, c) {
//     if (a < b && a < c) {
//         return `${a} is the smallest number1`
//     } else if (b < a && b < c) {
//         return `${b} is the smallest number2`
//     }else (c < a && c < b) {
//         return `${c} is the smallest number3`
//     }
// }
// console.log(SmallestNumber(5,8,2))


// function ReverseStr(s){
//      let ResStr = s.split("").reverse().join("")
//      return ResStr
// }
// console.log(ReverseStr("mnbvcxz is new word in eng"))

// function ResWord(s){
//     let result = "";
//  for (let i =s.length-1; i>=0; i--){
//     result+= s[i]
//  }
//    return result
//  }
//  console.log(ResWord("my name is unknow and i want some thing else..."))


// Factorial of number ...

// function FindFact(N) {
//     if(N<0){
//         throw new Error('Parameter is not a number!');
//     }
//     let num = 1;
//     if (N <= 0) {
//         return num;
//     } else {
//         for (i = 1; i <= N; i++)
//             num = num * i
//     }
//     return num
// }
// console.log(FindFact(-4))

// function IsLeap(year){
//     if(year%4==0){
//         return `${year} is leapyear...!`
//     }else{
//         return "Enter year is not leapyear"
//     }
// }
// console.log(IsLeap(2324))

// function IsLeap2(y){
//     return y%4==0?true:false;
// }
// console.log(IsLeap2(409))
//Find the digit of sum of given number...
// function FindDigitSum(num){
//     let res = 0;
//     let number = num.toString();
//     for(let i=0;i<number.length;i++){
//      res = res + parseInt(number[i]);
//     }
//     return res
// }
// console.log(FindDigitSum(118743))

//A function that find a table of some specific tables and a range...





