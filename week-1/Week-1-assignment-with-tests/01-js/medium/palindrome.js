/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function cleani(x){
let ans='';
for(let i=0;i<x.length;i++){
  if(x[i]==' '||x[i]=='?'||x[i]=='!'||x[i]==','||x[i]=='.'){}
  else{ans+=x[i];}
}
  return ans;
}


function isPalindrome(str) {
  var y=cleani(str);
 if (y) {var x=y.toLowerCase();}
  
  if(x){var j=x.length-1;}
  
  for(var i=0 ;i<j;i++){
    if(x[i]!=x[j]){return false;}
   j--;
  }
  return true;
}

module.exports = isPalindrome;
