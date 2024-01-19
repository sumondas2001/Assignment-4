// function cubeNumber(number) {
//      if(typeof number !== "number"){
//           return "plz enter your number ";

//      }
//      else {
//           const cube = (number **3);
//           return cube;
//      }

// }

// const number = cubeNumber (4);
// // console.log(number);







// function findAddress(obj) {
//      if(typeof obj !== "object"){
//           return "plz enter your object"
//      }
//      else{
//           const street = obj.street || "__";
//           const house = obj.house || "__";
//           const society = obj.society || "__";

//          const Output = street+","+house+","+society;
//          return Output;

//          const missing =+street+house+society;
//          return missing;

//      }
// }

// const object ={
//      street:10,
//      house:"15A",
//      society:"Earth Perfect"          
// }
// console.log(findAddress(object))


// function canPay(arry, number) {
//      if (!Array.isArray(arry)) {
//           return "plz enter your arry"
//      } else if (typeof number !== "number") {
//           return "plz enter your number"
//      } else {
//           let sum = 0;
//           for (let i = 0; i < arry.length; i++) {
//                const index = arry[i];
//                sum += index;

//           }
//           if (number <= sum) {
//                return true;
//           } else if (number > sum) {
//                return false;
//           }

//           return sum;

//      }
// }
// const arr = [1, 5, 5];
// const number = 10;
// const doifha = canPay(arr, number);
// // console.log(doifha);






function matchFinder(string1,string2) {
     if(typeof string1 !== "string" || typeof string2 !=="string"){
          return "erro"
     }

     if (string1.includes(string2)){
          return true;
     }else{
          return false;
     }
 
}
const string = matchFinder("Peter Parker","pet");
console.log(string);

// function sortMaker(arr) {
//      if(arr[0] < 0 || arr[1] < 0){
//           return "Invalid Input"
//      }else if(arr[0] === arr[1]){
//           return "equal"
//      }
//      else {
//           if(arr[0] < arr[1]){
//                return [arr[1], arr[0]];
//           }
//           else{
//                return [arr[0], arr[1]]
//           }
          
//      }
// }
// const arry = [5, 3];
// const arr = sortMaker(arry);
// // console.log(arr);


