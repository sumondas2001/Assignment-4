function cubeNumber(number) {
     if (typeof number !== "number") {
          return "plz enter your number ";

     }
     else {
          const cube = (number ** 3);
          return cube;
     }

}
function matchFinder(string1,string2) {
     if(typeof string1 !== "string" || typeof string2 !=="string"){
          return "plz enter your string"
     }

     if (string1.includes(string2)){
          return true;
     }else{
          return false;
     }
 
}

function sortMaker(arr) {
     if (arr[0] < 0 || arr[1] < 0) {
          return "Invalid Input"
     } else if (arr[0] === arr[1]) {
          return "equal"
     }
     else {
          if (arr[0] < arr[1]) {
               return [arr[1], arr[0]];
          }
          else {
               return [arr[0], arr[1]]
          }

     }
}



function findAddress(obj) {
     if (typeof obj !== "object") {
          return "plz enter your object"
     }
     else {
          const street = obj.street || "__";
          const house = obj.house || "__";
          const society = obj.society || "__";

          const Output = street + "," + house + "," + society;
          return Output;

          const missing = +street + house + society;
          return missing;

     }
}





function canPay(arry, number) {
     if (!Array.isArray(arry)) {
          return "plz enter your arry"
     } else if (typeof number !== "number") {
          return "plz enter your number"
     } else {
          let sum = 0;
          for (let i = 0; i < arry.length; i++) {
               const index = arry[i];
               sum += index;

          }
          if (number <= sum) {
               return true;
          } else if (number > sum) {
               return false;
          }

          return sum;

     }
}