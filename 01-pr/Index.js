let input = document.getElementById("input")

console.log(input)
const arr = [21,43,54,76,42,75,23,14,85 , "hellow world" , true];

// const  result = arr.filter((item, index) => {
//     // console.log(index , item);
//     let re =  item.length;
//     console.log(re);
// })

// arr.map((item , index)=>{
//     console.log(index , item)
// })

const onclicks = () => {
    const index = input.value; 

    if(index >= arr.length){
        alert("this is not defite");
    }
    if(arr.length > 0){
        if(input.value){
            alert(arr[index]);
        }else{
            alert("please type input");
        }
    }else{
        alert("array is not yous -1 , -2 , -3");
    }


    
}