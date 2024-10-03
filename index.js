/*----01----*/

// let a = [] ;
// let b = [] ;
// console.log(a == b) ;
// console.log(a === b) ;

/*----02----*/

// let str = "hello world! how are you?" ;
// let reverse = str.split(" ").map((word)=>{
//     return word.split("").reverse().join("")
// })
// console.log(reverse.join(" "))

/*----03----*/

// function checkArray(e){
//     let arrayorobj = Array.isArray(e)
//     console.log(arrayorobj)
// }
// checkArray([]) ;
// checkArray({}) ;

/*----04----*/

// let arr = [1,23,4,5,6];
// console.log(arr.length = 0)

/*----05----*/
// This is integer or not

// let num  = 43;
// if(num%1 === 0){
//     console.log("integer")
// }else{
//     console.log("Not integer")
// }

/*----06----*/

// function duplicate(arr){
//     let a = arr.concat(arr)
//     return a
// }
// console.log(duplicate([1,23,4,5,6]))

/*----07----*/

// function reversNumber(num){
//  let re = num.toString().split('').reverse().join('')
//  let number = Number(re)
//  return number
// }

// console.log(reversNumber(1234567891))


/*----08----*/

// let arr = [1,2,34,5,6]

// console.log(arr[2])

// arr.map((item,index)=>{
//     console.log("Array index " + index + " value is " + item)
// })

// arr.reverse().map((item,index)=>{
//     console.log("Array index " + index + " value is " + item)
// })

// arr.forEach((item,index)=>{
//     console.log("Array index " + index + " value is " + item)
// })

// for(let i = 0  ;  i < arr.length ; i++){
//     console.log("Array index " + i + " value is " + arr[i])
// }

/*----09----*/

// function func1 (){
//   return 2
// }
// function func2 (){
//   return 4
// }

// let result = (func1(),func2());
// console.log(result)

/*----10----*/

// let arr = ["one" , "two" , "three"] ;
// let str = "Hello";

// const res = arr.includes("on");
// const newArr = arr.includes("onetwo");
// const newStr = str.includes("ll");

// console.log(res);
// console.log(newArr);
// console.log(newStr);

/*----11----*/

// console.log(true == "")

// console.log("1" === 1 )

// let a = 10;
// let b = new Number(10);
// let c = 10 ;
// console.log(a === b);


/*----12----*/

// let a = {
//     name:"inzamam"
// }
// let c = {...a};
// z.name = "in";
// console.log(a.name);