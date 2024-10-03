let data_1 = [1,2,3,4,5];
let data_2 = [6,7,8,9,10];
let newData = [];

for (let i  = 0; i < data_1.length; i++) {
  newData[i] = data_1[i] ;
  // newData.push(data_1[i]); 
}
for (let i  = 0; i < data_2.length; i++) {
  newData[data_1.length + i] = data_2[i] ;
  // newData.push(data_2[i]); 
}
console.log(`This is new data ${newData.reverse()}`)

