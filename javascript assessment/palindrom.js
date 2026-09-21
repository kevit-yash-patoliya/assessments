function isPalindrome(str) {
    let newStr = Array.from(str).reverse().join("")
    return newStr === str
}

console.log(isPalindrome("AaA"))
console.log(isPalindrome("Aa"))