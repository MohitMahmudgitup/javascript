const data = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10];
const search = 50;
const search_dom = document.getElementById("input");

let index = undefined;
// for (let i = 0; i < data.length; i++) {
//   if (search === data[i]) {
//     index = i;
//     break;
//   }
// }

const onclicks = () =>{
  let input  = parseInt(search_dom.value);
  for (let i = 0; i < data.length; i++) {
    if (input === data[i]) {
      index = i;
      break;
    }
  }
  console.log(index)
}





// console.log(index);
// console.log(data.indexOf(search));

//delete
// data.splice(4,1);
// console.log(data);



// this just try OOP

// class player {
//   constructor(name , age , skill , year){
//     this.name = name ;
//     this.age = age ;
//     this.skill = skill ;
//     this.year = year
//   }
// }
// const sakib = new  player("Sakib" , 25 , "good" , 2001);
// const rakib = new  player("Rakib" , 25 , "good" , 2002);
// const inzamam = new  player("Inzamam" , 25 , "good" , 2000);

// console.log(sakib , rakib , inzamam)
