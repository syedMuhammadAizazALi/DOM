// question 1
// const names =document.querySelector("#names")
// const email = document.querySelector("#email")
// const password = document.querySelector("#password")
// const submit = document.querySelector("#submit")


// console .log (names);
// console.log(email);
// console.log(password);
// console.log(submit);


// function login() {
//     // console.log("hello")
//     console.log(names.value)
//     console.log(email.value)
//    console.log(password.value)
// }



// const names = document.querySelector('#name');
// const h3 = document.querySelector("h3");


// function greetUser() {

//         console.log(names.value) 
//       h3.innerHTML = "Hello " + names.value;
//       names.value = ""
//        } 




//  function clears() {
//       h3.innerHTML = ""
//        }


// const num1 = document.querySelector("#number")
// const num2 = document.querySelector("#numbers")
// const operator = document.querySelector("#operator")
// const h3 = document.querySelector("#head")

// console.log=(num1)
// console.log=(operator)
// console.log=(num2)

// function Result(num1, num2, operator) {
//     let Result;

//     switch (operator) {
//         case ("+"):
//             Result = num1 + num2;
//             h3.innerHTML = "Caluculation:" + sum;

//             break;
//         case ("%"):
//             h3.innerHTML = "calculation:" + per;
//             break;
//         case ("/"):
//             let divided = num1 / num2
//             h3.innerHTML = "calculation:" + divided;
//             break;
//         case ("-"):
//             let sub = num1 - num2
//             h3.innerHTML = "calculation:" + sub;
//             break;
//         case ("*"):
//             let multi = num1 * num2
//             h3.innerHTML = "calculation:" + multi;
//             break;

//         default:
//             document.write("Error")
//             break;


//     }


//     return 'Result: ${Result}'
// }

// console.log = (num1.value)
// console.log = (num2.value)
// console.log = (operator.value)
// h3.innerHTML = "calculation" + operator;

const monthSelected = document.querySelector("#monthSelected")
const h3= document.querySelector("#head")

function day() {
let season;
switch (selectedMonth) {
    case 'December':
    case 'January':
    case 'February':
      season = 'Winter';
      break;
    case 'March':
    case 'April':
    case 'May':
      season = 'Spring';
      break;
    case 'June':
    case 'July':
    case 'August':
      season = 'Summer';
      break;
    case 'September':
    case 'October':
    case 'November':
      season = 'Fall';
      break;
    default:
      season = 'Invalid Month';
  }
   
  h3.innerHTML= monthSelected.value
}






