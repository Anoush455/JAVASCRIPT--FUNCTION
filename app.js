// function displaycurrentdatetime(){
//     var currentdate = new date();
//     var year = currentdate.getfullyear();
//     var month = currentdate.getmonth();
//     var day = currentdate.getdate();
//     var hours = currentdate.gethours();
//     var minuts = currentdate.getminutes();
//     var second = currentdate.getsecond();
//     document.getElementById("datetime").textContent = "Current Date & Time: " + dateTimeString;
// }
// displaycurrentdatetime()

// function greet() {
//       var firstname = prompt("Enter first name");
//       var lastname = prompt("Enter last name");
//       var fullname = firstname + lastname;
//       console.log(fullname);
//     }
// greet(); // function calling


// function sum(a,b){
//     var a = 20;
//     var b = 30;
//     console.log(a +b)
// }
// sum(20 , 50)

// function calc(num1 , opr, num2){
//     if (opr === "+"){
//         return num1 + num2;
//     } else if (opr === "-"){
//         return num1 - num2;
//     } else if (opr === "*"){
//         return num1 * num2;
//     } else if (opr === "/"){
//         return num1 / num2;
//     }
// }

// var num1 = prompt("enter first value");
// var operator = prompt("enter operator value");
// var num2 = prompt("enter Second value")

// var result = calc(num1 , operator , num2);

// console.log(result);

// function square(number){
//     return number * number
// }
// var num = 10;
// var result = square(num);
// console.log(result);

// function factorialIterative(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// var num = 6;
// var result = factorialIterative(num);
// console.log(result);


// function displayCounting(start, end) {
//     if (start <= end) {
//         for (let i = start; i <= end; i++) {
//             console.log(i);
//         }
//     } else {
//         console.error("Start number should be less than or equal to the end number.");
//     }
// }
// var startNumber = parseInt(prompt("Enter the start number:"));
// var endNumber = parseInt(prompt("Enter the end number:"));

// if (!isNaN(startNumber) && !isNaN(endNumber)) {
//     displayCounting(startNumber, endNumber);
// } else {
//     console.error("Please enter valid numbers for both start and end.");
// }

// function countOccurrences(str, letter) {
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();

//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// var inputString = 'JSResourceS.com';
// var targetLetter = 'o';

// var result = countOccurrences(inputString, targetLetter);
// console.log(result);


// function capitalizeFirstLetterOfEachWord(inputString) {
    
//    var words = inputString.split(' ');
//  var capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     var capitalizedString = capitalizedWords.join(' ');

//     return capitalizedString;
// }

// var inputString = 'the quick brown fox';
// var capitalizedResult = capitalizeFirstLetterOfEachWord(inputString);
// console.log(capitalizedResult);

// function findLongestWord(inputString) {
//     const words = inputString.split(' ');
//     var longestWord = '';
//     var longestLength = 0;

//     for (const word of words) {
//         if (word.length > longestLength) {
//             longestWord = word;
//             longestLength = word.length;
//         }
//     }
//     return longestWord;
// }
// var inputString = 'Web Development Tutorial';
// var longestWordResult = findLongestWord(inputString);
// console.log(`The longest word in the string is: ${longestWordResult}`);
