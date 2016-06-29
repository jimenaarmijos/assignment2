// A2P1 - Strings and String Manipulation
// Jimena Armijos         

/*
//Step 1
var name = window.prompt("Enter your user name:");
window.alert("The length of you name is " + name.length);
*/
        
/*
//Step 2
var name = window.prompt("Enter your user name:");
var pos = window.prompt("Enter a number from 0 to length on your name:");
var c = name.charAt(pos);
window.alert("The character at that position in your name is " + c);
*/
        
/*
//Step 3
var first_name = window.prompt("Enter your first name:");
var last_name = window.prompt("Enter your last name:");
window.alert("Your name is " + first_name + " " + last_name);
*/

/*
//Step 4
var msg = "The quick brown fox jumped over the lazy dog.";
var pos = msg.indexOf("fox");
window.alert("The location of 'fox' in the string is " + pos);
*/

/*
//Step 5
var msg = "The quick brown fox jumped over the lazy fox.";
var pos = msg.lastIndexOf("fox");
window.alert("The location of last instance of 'fox' in the string is " + pos);
*/

/*
//Step 6
var msg = "The quick brown fox jumped over the lazy dog.";
var full_name = window.prompt("Enter your full name:");
var result = msg.replace("the lazy dog", full_name);
window.alert(result);
*/

/*
//Step 7
var msg = "The quick brown fox jumped over the lazy dog.";
var word = window.prompt("Enter a word:");
var pos = msg.search(word);
if (pos == -1){
    window.alert("Your word was not found in the string.");    
}else{
    window.alert("Your word was found at position " + pos + " in the string.");          
}
*/

/*
//Step 8
var old_string = "The quick brown fox jumped over the lazy dog.";
var new_string = old_string.slice(32,44);
window.alert(new_string.toUpperCase());
*/

/*
//Step 9
var msg = "     THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG      ";
msg = msg.trim();
msg = msg.toLowerCase();
window.alert(msg);
*/

/*
//Step 10
var msg = "the quick brown fox jumped over the lazy dog.";
var msg = msg[0].toUpperCase() + msg.substring(1);
window.alert(msg);
*/

//End

