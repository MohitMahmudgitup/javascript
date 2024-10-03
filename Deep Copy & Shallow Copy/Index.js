// SHALLOW COPY AND DEEP COPY

// Q1

// let obj = {
//     name : "oldname",
//     age : 132
// }

// let newObj = obj; // This is just only pin in  " obj " , not copy if you copy this than you use {...obj}

// newObj.name = "newname"
// console.log(newObj)
// console.log(obj)

// Q2

// let obj = {
//     name : "oldname",
//     age : 132
// }

// let newObj = {...obj};

// newObj.name = "newname";

// console.log(obj)
// console.log(newObj)

// Q3 

// let obj = {
//     name : " Inzamam ",
//     age : 12,
//     socail : {
//         facebook : {
//             ac1 : "inzamam@gmail.com",
//             ac2 : "inzamam123@gmail.com"
//         },
//         x : {
//            free : {
//             ac1 : "inzamam@gmail.com",
//            },
//            paid : {
//             ac2 : "inzamam123@gmail.com"
//            }
//         }
//     }
// }

// let newObj = {...obj}; // this here problem is SHALLOW COPY 

// newObj.socail.x.free.ac1 = "hi" 

// console.log(obj)
// console.log(newObj)

// Q4

let obj = {
    name : " Inzamam ",
    age : 12,
    socail : {
        facebook : {
            ac1 : "inzamam@gmail.com",
            ac2 : "inzamam123@gmail.com"
        },
        x : {
           free : {
            ac1 : "inzamam@gmail.com",
           },
           paid : {
            ac2 : "inzamam123@gmail.com"
           }
        }
    }
}

let newObj = JSON.parse(JSON.stringify(obj));

newObj.socail.x.free.ac1 = "new@gmail.com"

console.log(obj.socail.x.free.ac1)
console.log(newObj.socail.x.free.ac1)

