
//fix : now handled case-sensitivity 
function vowels(des) {
    let vowelCounts = 0;
    for(let i of des){
        if(['a','i','e','o','u','A','E','I','O','U'].includes(i)){
            vowelCounts++;
        }
    }
    return vowelCounts
}

console.log(vowels("Hey I am Yash and i currently learning javascript"))