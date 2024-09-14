const indexPosition = document.getElementById("indexPosition") ;
// const h1 = document.getElementById("h1") ; 
let data = [1,2,3,4,5] ; 

// let indexPosition = 0 ; 
// for(let i = indexPosition ;  i < data.length  ; i++){
//     data[i] = data[ i + 1]
// }
// data.length = data.length - 1;

// console.log(data);


const onclicks = () => {
    try {
        let index = parseInt(indexPosition.value)
        console.log(index) ; 
    if(!index){
        alert("Please add number");
    };
    if(data.length == 0 ){
        alert("data is over");
    };
    if(index){
        for(let i = index ; i < data.length ; i++){
            data[i] = data[i + 1] ; 
        }
        data.length = data.length - 1 ; 
        console.log(data);
    }
    console.log(data);
    } catch (error) {
        console.log(error);
    }

} 
