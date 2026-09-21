function maxElem(arr){
    let max = Number.MIN_VALUE
    for(let element of arr){
        if(max < element){
            max = element
        }
    }
    return max;
}

console.log(maxElem([1,2,3,4,54,5,6,67,7]))

