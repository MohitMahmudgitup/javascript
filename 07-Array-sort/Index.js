const data = [12,32,43,54,677,43,32,21,11,2];

for (let i = 0; i < data.length; i++) {
  for(let j  = 0; j < data.length; j++) {
    if(data[j] > data[j + 1]){
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }

}

//--------revers--------

// for (let i = 0; i < data.length; i++) {
//   for(let j  = 0; j < data.length; j++) {
//     if(data[j] < data[j + 1]){
//       let temp = data[j + 1];
//       data[j + 1] = data[j];
//       data[j] = temp;
//     }
//   }
// }



console.log(data)

