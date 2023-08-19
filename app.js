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






// function calalution() {
//   const num1 =+(document.querySelector("#number").value);
// const num2 = +(document.querySelector("#numbers").value);
// const operator = document.querySelector("#operator").value;
// const h3 = document.querySelector("#head");
    

//     switch (operator) {
//         case ("+"):
//             h3.innerHTML = num1 + num2;

//             break;
//         case ("%"):
//             h3.innerHTML = num1+num2
//             break;
//         case ("/"):
//           if (num2 !== 0) {
//             h3.innerHTML = num1 / num2;
//         } else {
//             h3.innerHTML = "Cannot divide by zero";
//         }
    
//             break;
//         case ("-"):
//             h3.innerHTML= num1 - num2
            
//             break;
//         case ("*"):
//             h3.innerHTML = num1 * num2
          
//             break;

//         default:
//             document.write("Error")
//             break;


//     }


   
// }














function day() {
  
  const selectedMonth = document.querySelector("#monthSelect").value;
  
  const h3 = document.querySelector("#head");


  switch (selectedMonth) {
    case 'December':
    case 'January':
    case 'February':
      h3.innerHTML = 'Winter';
      break;
    case 'March':
    case 'April':
      h3.innerHTML = 'Spring';
      break;
    case 'May':
    case 'June':
    case 'July':
      h3.innerHTML = 'Summer';
      break;
    case 'August':
    case 'September':
    case 'October':
      h3.innerHTML = 'Fall';
      break;
    case 'November':
      h3.innerHTML = 'Fall';
      break;
    default:
      h3.innerHTML = 'Invalid Month';
  }
}
