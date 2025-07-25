// let num1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let last = num1[num1.length - 1];
// let sum = 0;
// for (let j = 0; j < num1.length; j++) {
//   sum = sum + num1[j];
// }
// console.log("sum = " + sum); // 550
// console.log("last = " + last); // 100

// for (let i = 0; i < sum; i++) {
//   if (num1[i] === last - i) {
//     console.log("Your second lasgest number is " + last);
//   }
// }
// ---------------------------------------------------------------------------------------------
// let arr = ["ali", "KhIZer", "mustafa"];
// let flag = true;
// for (let i = 0; i < arr.length; i++) {
//   let lowercase = arr[i].toLowerCase();
//   let firstLetter = lowercase[0].toUpperCase();
//   let char = lowercase.slice(1);
//   console.log(firstLetter + char);
// }
// --------------------------------------------------------------------------------------------------
// let sentence = "This is a sentence.";
// let count = 0;
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] === " ") {
//     count++;
//   }
// }
//
// console.log("Total Words " , count + 1);
// --------------------------------------------------------------------------------------------------
// function score(score) {
//   for (let i = 0; i < score.length; i++) {
//     if (score[i] > 70) {
//       console.log(score[i] + " is a good score");
//       break;
//     } else {
//       console.log(score[i] + " is a bad score");
//     }
//   }
// }
// ---------------------------------------------------------------------------------------------------
// score([45, 50, 85]);

// let remarks = prompt("Give your rematks");

// remarks = remarks.replace(/shit/g, "****");

// console.log(remarks);
// ------------------------------------------------------------------------------------------------------

// let message = "This product is shit. and you guys are dumb.";
// let badWords = ["shit", "dumb"];
// for (let i = 0; i < badWords.length; i++) {
//   message = message.replace(badWords[i], "****");
// }
// console.log(message);
//-------------------------------------------------------------------------------------------------------

// let para =
//   "This is a Paragraph in which we are going to discuss about Pakista Civil Aviation.";

// for (let i = 0; i < para.length; i++) {
//   if (para[i] >= "a" && para[i] <= "z") {
//     console.log("This is Small " + para[i]);
//   } else if (para[i] >= "A" && para[i] <= "Z") {
//     console.log("This is Capital " + para[i]);
//   } else {
//     console.log("This is no character " + para[i]);
//   }
// }
//------------------------------------------------------------------------------------------------------------
// let para = prompt("Enter Your para");

// for (let i = 0; i < para.length; i++) {
//   if (para[i] >= "a" && para[i] <= "z") {
//     console.log("This is Small " + para[i]);
//   } else if (para[i] >= "A" && para[i] <= "Z") {
//     console.log("This is Capital " + para[i]);
//   } else if (para[i] >= "0" && para[i] <= "9") {
//     console.log("This is Number " + para[i]);
//   } else if (para[i] === " ") {
//     console.log("This is Space " + para[i]);
//   } else {
//     console.log("This is no character " + para[i]);
//   }
// }
//---------------------------------------------------------------------------------------------------------------

// let pass = prompt("Enter Your Password");
// let flag = false;
// let flag1 = false;
// for (let i = 0; i < pass.length; i++) {
//   if (pass[i] >= "A" && pass[i] <= "Z") {
//     flag = true;
//   } else if (pass[i] >= 0 && pass[i] <= 9) {
//     flag1 = true;
//   }
// }
// if (pass.length >= 6 && flag && flag1) {
//   console.log("Password is strong");
// } else {
//   console.log("Password is week");
// }
//-----------------------------------------------------------------------------------------------------------