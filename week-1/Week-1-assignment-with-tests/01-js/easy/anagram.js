/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
var arr= str.split("");
arr.sort();
return arr.join()
}
var str1='',str2='';
function isAnagram(str1, str2) {
  var x=str1.toLowerCase();
  var y=str2.toLowerCase();
if(sort(x)==sort(y)){return true;}
else return false;
}
isAnagram(str1, str2);
module.exports = isAnagram;
