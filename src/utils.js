// Your code here
export function isPalindrome(word){
    return word === word.split(' ').reverse().join('') ? true : false;
  }