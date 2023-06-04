//Part 1: Find the culprits and nail them — debugging javascript

alert("I'm invoked!");


alert("I'm JavaScript!");
alert('Hello') 
alert(`Wor
 ld`)
alert(3 +
1
+ 2); 

{ //alert Guvi geek
let admin, fname, lname; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin );  //Output Guvi geek
}

{ //alert hello Guvi geek
let fname, lname; 
fname = "Guvi";
lname = "geek"
let name = fname+" "+lname;
alert(`hello ${name}`);  //Output hello Guvi geek
//Use Backtick to alert the hello Guvi geek
}

{  //alert sum of two numbers
let a = parseInt(prompt("First number?"));//5
let b = parseInt(prompt("Second number?"));//5
alert(a + b); //Output 10
//Inputs are taken as strings, convert them into numbers using parseInt() method and perform addition over it
}

{  //Explain Why the Code is blasted
var a = "2" > "12";
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}  //Output Code is Blasted
//In dictionary comparison, first char 2 is greater than the first char 1  hence a is true and Code is Blasted is displayed
}

{ //how to diffuse it and get “Diffused”
//We can display Diffused by comparing other values
var a = "2" > "21";
if (a) {
    console.log("Code is Blasted")
}
else
{
    console.log("Diffused") 
}  //Output Diffused
}

{ //Console Success
let a = parseInt(prompt("Enter a number?")); // when string is entered, hello
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}  //Ouput Success
//Variable a is parsed to number, when number is entered it consoles, OMG it works for any number inc 0 or when a string is entered, it consoles success
}

{  //Console correct score
let value = parseInt(prompt('How many runs you scored in this ball'));//4
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}  //Output You hit a Four
//Parse the variable value by parseInt() so it converts the string to number and consoles the correct score
}

{ //Console welcome Employee
let login = 'Employee';
let message = (login == 'Employee') ?  "welcome Employee " : "No login";
console.log(message);  //Output welcome Employee
}

{  //Console welcome boss
let message;
if (null || 2 || undefined )
{
 message = "welcome boss";
}
else
{
 message = "Go away";
}
  console.log(message);  //Output welcome boss
}

{
let message;
let lock; 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);  //Output welcome 
}

{
let message;
let lock;
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);  //Output welcome
}

{ // Change the code to print 3 2 1
let i = 3;
while (i) {
  console.log( i-- );  //Output 3 2 1
}
}

{// Change the code to print 1 to 10 in 4 lines
let num1 = 1, num2 = num1 + 1, num3 = num2 + 1, num4 = num3 + 1;
console.log(num1, num2, num3, num4)
    
let num5 = num4 + 1, num6 = num5 + 1, num7 = num6 + 1;
console.log(num5, num6, num7)

let num8 = num7 + 1, num9 = num8 + 1;
console.log(num8, num9)

let num10 = num9 + 1;
console.log(num10)
  /* Output 1 2 3 4 
            5 6 7
            8 9
            10 */ 
}

{ //Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }  //Output 2 4 6 8 10 12 14 16 18 20
}

{ //Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`${gifts[i]}`);
}
}  //Output teddy bear   drone  doll

{
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == -1)
  {
   console.log("bomb triggered");
  }
}
}

{
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg); // Output hi
//string "0" stored in lemein is considered as true so the message hi is consoled
}
 