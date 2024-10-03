const data = [21,34,45,765,867,897,32,true,"hello"];

//----------- forEach () method -------------

data.forEach((v,i)=>{
  // console.log(data); [21,34,45,765,867,897,32,true,"hello"]
  // console.log(v); //  output : 21,34,45,765,867,897,32,true,"hello"
})

// if we want to print 765

// data.forEach((v,i)=>{
//   if(v ==765){
//     // console.log(v); // output : 765
//   }
// })

// if we want  to print index of 765

// data.forEach((v,i)=>{
//   if(v ==765){
//     // console.log(i); // output : 3
//   }
// })

// if we want all print but dose not print 765

// data.forEach((v,i)=>{
//   if(v ==  765){}
//   else{console.log(v)}; // output : 21,34,45,867,897,32
// })

// ----------- map() method -------------
// map() method returns a new array 


