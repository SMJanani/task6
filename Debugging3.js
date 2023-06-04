//Part 3: Find the culprits and nail them — debugging javascript


//Fix the code to get the largest of three.
aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);  //Output 3


//Fix the code to Sum of the digits present in the number
let n = "123";
let sum = 0;
function add(n)
{
for(var i=0;i<n.length;i++){
 sum+= parseInt(n[i]);
 }
 return sum;
}
console.log(add(n));  //Output 6


//Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();  //Output 38


//Fix the code to get Title caps.
var arr1 = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arr1.length; i++) {
 //console.log(arr1[i][0].toUpperCase() + arr1[i].substr(1));
 }
}
ano();  //Output Guvi Geek Zen Fullstack


//Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;num>i;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num>1;
});
console.log(myPrime);  //Output [ 3, 2, 5 ]


//Fix the code to sum the number in that array
{
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) => a + b;
const sum1 = num.reduce(sum);
console.log(sum1);
}  //Output 550


 //Fix the code to gen Title caps.
var array = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i <= array.length; i++) {
 console.log(array[i][0].toUpperCase() + array[i].substr(1));
 }
})();  //Output Guvi Geek Zen Fullstack


//print all odd numbers in an array using IIFE function
var array1 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < array1.length; i++) {
 if (array1[i] % 2 !== 0) {
 console.log(array1[i]);
 }}
})();  //Output 1 3 5 7 79 7 9 


//Fix the code to reverse.
(function(str){
   let str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd");  //Output dcba


//Fix the code to remove duplicates.
var res = function(arr){
    let newArr = [];
    for(var i=0; i < arr.length; i++){
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"]);  //Output [ 'guvi', 'geek', 'duplicate', 'geeK' ]


//Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;}, 0);
console.log(s);  //Output 6


//Swap the odd and even digits
aa = data=>{
    var a=data;
   for(i=0;i<a.length-1;i++){
    var l='';
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if(a.length%2 !=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");  //Output 43
