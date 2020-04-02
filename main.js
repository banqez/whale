let input = "zagłębie sosnowiec"

const vovels = ["a", "e", "i", "o", "u"]

let resultArray = []

for (let i = 0; i < input.length; i++) {
 for (let j = 0 ; j < vovels.length; j++) {
   if (input[i] === vovels[j]) {
     if (input[i] === "e") {
       resultArray.push(input[i] + input[i])
     } else if ((input[i] === "u")) {
       resultArray.push(input[i] + input[i])
     } else {resultArray.push(input[i])}

    }
   }
  }
console.log(resultArray.join("").toUpperCase())