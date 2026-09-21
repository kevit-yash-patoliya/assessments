function isPalindrome(str) {
    let newStr = Array.from(str).reverse().join("")
    return newStr === str
}

// without Array.from
function isPalindromeWithoutFrom(str) {
    let n=str.length;
    for(let i=0;i<str.length/2; i++){
        if(str[i]!==str[n-i-1]){
            return false;
        }
    }
    return true
}

console.log(isPalindrome("AaA"))
console.log(isPalindrome("Aa"))
console.log(isPalindromeWithoutFrom("AaA"))
console.log(isPalindromeWithoutFrom("Aa"))
