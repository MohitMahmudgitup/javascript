const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let data = [12,51,632,6721,41,47, true] ;

// console.log(data);

// let a =  data.splice(null, 0 ," 2000")
// console.log(data);

// let newData = 700 ;
// let newIndex = 3 ;

// console.log(data.length)

// console.warn(data)
// for (let i = data.length - 1; i >= 0 ; i--){
//     if( i >= newIndex){
//         data[ i + 1] = data[i];
//         if( i === newIndex){
//             data[i] = newData
//         }
//     }
// }
// console.warn(data)

// if( i  === newIndex){
//     data = data + 1
// }


// let t = true
// let f = false
// let str = "String"
// let num = 21
// console.log(num === "String" )


// const onclicks = () => {
//     let index_input1 = input1.value ;
//     let index_input2 = input2.value ;
//     for ( let i = data.length - 1 ; i >= index_input2 ; i--){
//         data[i + 1] = data[i];
//     }
//     data[index_input2] = index_input1 
//     console.log(data)
// }

const onclicks = () => {
    let index_input1 = Number(input1.value);  // The value to insert
    let index_input2 = parseInt(input2.value);  // The index where to insert

    // Create a new array with the new element inserted
    data = data.map((item, index) => {
        // console.log([index_input1, item]) // Insert the new value and keep the current item
        if (index === index_input2) {
            return [index_input1, item]; 
        } else {
            return item;  // Return the item unchanged
        }
    }).flat();  // Flatten the array to remove nested arrays

    console.log(data);
};

// const onclicks = () => {
//     let index_input1 = Number(input1.value) ;
//     let index_input2 = input2.value ;
//     if(index_input2){
//         data.splice(index_input2, 0 , index_input1)
//         console.log(data)
//     }
// }


