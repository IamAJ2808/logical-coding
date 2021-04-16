// Check if a given string is a palindrome
// Input: 'mom'
// Output: 'Given string is a palindrome'

// Input: 'sister'
// Output: 'Given string is not a palindrome'

//Method 1 - Using for loop to reverse a string
function checkPalindrome1(str){
    let reversedString = "";
    for(let i=str.length-1;i>=0;i--){
        reversedString += str[i];
    }
    if(reversedString.toLowerCase() === str.toLowerCase()){
        console.log("Given string is a palindrome");
        return "Given string is a palindrome";
    }else{
        console.log("Given string is not a palindrome");
        return "Given string is not a palindrome";
    }
}
  
checkPalindrome('mom');
checkPalindrome('sister');

//Method 2 - Using Recursion to reverse a string
function reverseString(str){
   let lastLetter = str.charAt(str.length -1);
   let removeLastLetter = str.slice(0,str.length -1);
   if(removeLastLetter.length > 0){
    return lastLetter + reverseString(removeLastLetter);
   }else{
    return lastLetter;
   }   
}
function checkPalindrome2(str){
    if(!str) return "Please give me a string";
    let reversedString = reverseString(str);
    if(reversedString.toLowerCase() === str.toLowerCase()){
        console.log("Given string is a palindrome");
        return "Given string is a palindrome";
    }else{
        console.log("Given string is not a palindrome");
        return "Given string is not a palindrome";
    }
}

checkPalindrome('mom');
checkPalindrome('sister');

//Method 3 - Using javascript library function
function checkPalindrome3(str){
    let reversedString = str.split("").reverse().join("");
    if(reversedString.toLowerCase() === str.toLowerCase()){
        console.log("Given string is a palindrome");
        return "Given string is a palindrome";
    }else{
        console.log("Given string is not a palindrome");
        return "Given string is not a palindrome";
    }
}

checkPalindrome('mom');
checkPalindrome('sister');