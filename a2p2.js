
//Jimena ASSIGN 2 PART 2 Math and Math Functions

/*
//Step1
var num = window.prompt("Enter a number:");
window.console.log("Positive value of number is: " + Math.abs(num));
*/

/*
//Step2
var num = window.prompt("Enter a floating point number:");
window.console.log("Roundup of number is: " + Math.round(num));
*/

/*
//Step3
var num = window.prompt("Enter a floating point number:");
window.console.log("Round down of number is: " + Math.floor(num)); 
*/

/*
//Step4  
var nums = window.prompt("Enter a comma seperated list of 5 numbers:");
var aNums = new Array();
aNums = nums.split(",");
var smallest, largest;
smallest = aNums[0];
largest  = aNums[0];

for (var i = 1; i <= aNums.length; i++){
    if (Number(aNums[i]) < smallest){
        smallest = Number(aNums[i]);   
    }
    if (Number(aNums[i]) > numLarge){
        largest = Number(aNums[i]);   
    }
}
window.console.log("Largest is " + largest);
window.console.log("Smallest is " + smallest);
*/

/*
//Step5
var num = window.prompt("Enter a number:");
var numberSqrt = Math.sqrt(strNum1);
window.console.log(numberSqrt);
*/

//PART2 Date and Date Functions

/*
//Step6
date = new Date();
window.console.log(date);

/*
//Step7 
function getDaysInMonth(month,year) {
    return new Date(year, month, 0).getDate();            
}
window.console.log(getDaysInMonth(4, 2016)); 
*/

/*
//Step8
var months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
var d = new Date();
window.console.log("The current month is " + months[d.getMonth()]);
*/

/*
//Step9 
var date = new Date();
date.setFullYear(2016);
date.setMonth(5);
date.setDate(12);

if(date.getDay() == 6 || date.getDay() == 0){ 
    window.alert('Weekend!');
}else{
    window.alert('Weekday!');
}
*/

/*
//Step10 
var date = new Date();
var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

date.setDate(date.getDate()-1);
var curr_day  = date.getDay();

window.console.log(d_names[curr_day]);
*/

/*
//Step11
var date = new Date();
var n = date.getDay();
var c;
switch (n) {
    case 0:
       c = "S"; break; 
    case 1:   
       c = "M"; break; 
    case 2:   
       c = "T"; break; 
    case 3:    
       c = "W"; break;
    case 4: 
       c = "T"; break;  
    case 5:     
       c = "f"; break;
    case 6:
       c = "S"; break;
}
window.console.log(c); 
*/   

//PART3 Conditional Logic and Looping

/*
//Step12 
var num1 = window.prompt("Enter first number:");
var num2 = window.prompt("Enter second number:");
var largest = num1;
if (Number(num2) > Number(num1)){
    largest = num2;  
}else{
    largest = num1;
}
document.write("Larger number is " + largest);
*/

/*
//Step13
var aStudents = ["Miguel","Zak","Dennis","Mary","Marcela"];
var aGrades   = [   80   ,  77  ,  88   ,   95    ,  68  ];
var aLetters   = [   "F"  ,  "F" ,  "F"  ,   "F"   ,  "F" ];

for (var i = 0; i < 5; i++){
    if (aGrades[i] < 60){
        aLetters[i] = "F";
    }else if(aGrades[i] < 70){
        aLetters[i] = "D"; 
    }else if(aGrades[i] < 80){
        aLetters[i] = "C"; 
    }else if(aGrades[i] < 90){
        aLetters[i] = "B";
    }else if(aGrades[i] <= 100){
        aLetters[i] = "A";
    }    
}

for (var i = 0; i < aStudents.length; i++){
    window.console.log(aStudents[i]+" "+aLetters[i]);
}
*/

/*
//Step14 
for (var i = 1; i <= 15; i++){
    if (i % 2 == 0){
        window.console.log("Number " + i + " is even");
    }else{

        window.console.log("Number " + i + " is odd");
    }
}
*/

/*
//Step15 
 for (var i = 1; i <= 100; i++){     
    if ((i % 3 == 0) && (i % 5 == 0)) {
        window.console.log(i + " FizzBuzz");
    }else if (i % 3 == 0){
        window.console.log(i + " Fizz");
    }else if (i % 5 == 0) {
        window.console.log(i + " Buzz");
    }   
}
*/

//PART4 Hitchhiker's Guide to Galaxy

/*
//Step1
var response = window.confirm("Do you want to play this game?");
if (response == true){
    window.alert("Awesome, our hero is waiting!");
}else{
    window.alert("Too bad, we're going to play anyway because our hero deperately needs your help!");
}
*/

/*
//Step2 
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera.  You are disoriented, lost and hungry and extremely thirsty.  You see a speck of light in the distance ahead of you, something simmering to your right, and the sound of running water on your left.  Your back is against the wall...");
*/

/*
//Step3
var dir = window.prompt("Which direction would you like to head (please enter forward, left, or right)");
*/

/*
//Step4
switch (dir){
    case "forward":
        window.alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
    case "left":
        window.alert("Your thirst has gotten the better of you.  You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;    
    case "right":
        window.alert("You found the gold.  You jump into a pile of gold to celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    default:
        window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option...loser.");
}
*/

/*
//Step5
var rating = window.prompt("Please rate this game on a scale of 1 to 10");
*/

/*
//Step6
if (Number(rating) > 10) rating = 10;

if (Number(rating) >= 6 && Number(rating) <= 10){
    window.alert("Thank you, we will continue to improve the game.");
}else{
    window.alert("Whatever, you weren't very good at the game anyway");
}   
*/

//PART5 Coin Fliip

/*
//Step1
var flip = Math.random();
*/

/*
//Step2 
choice = window.prompt("Heads or Tails");
*/

/*
//Step3
var result;
if (flip < 0.5){
    result = "heads";
}else{
    result = "tails";
}
*/

/*
//Step4, 5, 6, and 7
if (result == "heads" && choice == "heads"){
    window.alert("The flip was heads and you chose heads, you win!");
}else if(result == "heads" && choice == "tails" ){
    window.alert("The flip was heads and you chose tails, you lose!");
}else if(result == "tails" && choice == "heads" ){
    window.alert("The flip was tailss and you chose heads, you lose!.");
}else{
    window.alert("The flip was tails and you chose tails, you win!");
}
*/

/*
//Step8
flip = Math.round(Math.random());
flip = Math.floor(Math.random()*2);
window.console.log(coinFlip);

var result;
if (flip == 0){
    result = "heads";
}else{
    result = "tails";
}
*/

//PART6 Coin Flip Redux

/*
//Step1
var flip;
*/

/*
//Step2, 3 and 4
for (var i = 1; i <= 10; i++){ 
    flip = Math.round(Math.random());
    if (flip == 0){
        window.console.log("heads");
    }else{
        window.console.log("tails");
    }    
 }
*/

//PART7 Coin Flip Streak

/*
//Step1, 2, 3, 4, 5
var flip = 1;
//Step2 
do {
   //Step3 
   flip = Math.round(Math.random());
   //Step4
   if (flip == 0){
      window.console.log("Heads"); 
   }else{
      window.console.log("Tails"); 
   }
   //Step5  
} while (flip == 1)
*/

//Part 6 and 7 ???

/*
//PART8 Looping a triangle
var output = "";
for (var i = 1; i <= 7; i++){
    for (var j = 1; j <= i; j++){
        output = output + "#";
    }
    window.console.log(output);
    output = "";
}
*/

/*
//PART9 Odd or Even ?
for(var i = 1; i <= 15; i++){
    if (i % 2 == 0){
        window.console.log(i + " is even");
    }else{
        window.console.log(i + " is odd");            
    }     
}

//End
