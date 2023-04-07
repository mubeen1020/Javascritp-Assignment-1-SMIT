// Assignment 1 JavaScript

// Q1 : Write a JavaScript program that accepts two numbers in two prompts and
//displays the larger one in the console.

const User_Input_Firstnumber = +prompt("Enter First Number");
const User_Input_Secondnumber = +prompt("Enter Second Number");

if (User_Input_Firstnumber > User_Input_Secondnumber) {
    document.write(`${User_Input_Firstnumber} is greather than ${User_Input_Secondnumber}`);
    alert(`${User_Input_Firstnumber} is greather than ${User_Input_Secondnumber}`);
    console.log(`${User_Input_Firstnumber} is greather than ${User_Input_Secondnumber}`);
} else if (User_Input_Secondnumber > User_Input_Firstnumber) {
    document.write(`${User_Input_Secondnumber} is greather than ${User_Input_Firstnumber}`);
    alert(`${User_Input_Secondnumber} is greather than ${User_Input_Firstnumber}`);
    console.log(`${User_Input_Secondnumber} is greather than ${User_Input_Firstnumber}`);
} else {
    document.write(`${User_Input_Firstnumber} is equal to ${User_Input_Secondnumber}`);
    alert(`${User_Input_Firstnumber} is equal to ${User_Input_Secondnumber}`);
    console.log(`${User_Input_Firstnumber} is equal to ${User_Input_Secondnumber}`);
}

//Q2 : Write a JavaScript conditional statement to find the sign of a number. Display
//an alert box with the specified sign.

const User_Input_Number = prompt("Enter a number:");
if (User_Input_Number > 0) {
    document.write("The sign is +");
    alert("The sign is +");
    console.log("The sign is +");
} else if (User_Input_Number < 0) {
    document.write("The sign is -");
    alert("The sign is -");
    console.log("The sign is -");
} else {
    alert("The number is zero.");
}

//Q3 : Write a JavaScript program that accepts five numbers in five prompts and
//displays the larger one in the console.

let Input_Firstnumber = parseFloat(prompt("Enter First number:"));
let Input_Secondnumber = parseFloat(prompt("Enter Second number:"));
let Input_Thirdnumber = parseFloat(prompt("Enter Third number:"));
let Input_Fourthnumber = parseFloat(prompt("Enter Fourth number:"));
let Input_Fifthnumber = parseFloat(prompt("Enter Fifth number:"));

let Largest_Number = Input_Firstnumber;

if (Input_Secondnumber > Largest_Number) {
  Largest_Number = Input_Secondnumber;
}
if (Input_Thirdnumber > Largest_Number) {
  Largest_Number = Input_Thirdnumber;
}
if (Input_Fourthnumber > Largest_Number) {
  Largest_Number = Input_Fourthnumber;
}
if (Input_Fifthnumber > Largest_Number) {
  Largest_Number = Input_Fifthnumber;
}

document.write("The largest number is " + Largest_Number)
alert("The largest number is " + Largest_Number)
console.log("The largest number is " + Largest_Number)

//Q4 : Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//will check if the current number is odd or even, and display a message to the
//screen.

let Input_Number = parseInt(prompt("Enter the Number:"));

for (let i = 0; i <= Input_Number; i++) {
  if (i % 2 === 0) {
    document.write(i + " is even")
    console.log(i + " is even");
  } else {
    document.write(i + " is odd")
    console.log(i + " is odd");
  }
}

//Q5 : Write a JavaScript program which computes the average marks of the
//following students Then, this average is used to determine the corresponding
//grade.

let totalMarks = 500;
do {
    mark = parseInt(prompt("Enter the marks of the student (max 500):"));
  } while (mark > 500);

let percentage = (mark / totalMarks) * 100;
console.log("Percentage: " + percentage + "%");

if (percentage < 60) {
  console.log("Grade: F");
} else if (percentage < 70) {
  console.log("Grade: D");
} else if (percentage < 80) {
  console.log("Grade: C");
} else if (percentage < 90) {
  console.log("Grade: B");
} else {
  console.log("Grade: A");
}

//Q6 : Write a JavaScript program which iterates the integers from 1 to 100. But for
//multiples of three print "Fizz" instead of the number and for the multiples of five
//print "Buzz". For numbers which are multiples of both three and five print
//"FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

//Q7 : Write a JavaScript program to construct the following pattern, using a nested
//for loop.
//*
//**
//***
//****
//*****

for (let i = 1; i <= 5; i++) {
    let Character = "";
    for (let j = 1; j <= i; j++) {
      Character += "*";
    }
    console.log(Character);
  }


