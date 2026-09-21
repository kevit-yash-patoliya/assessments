function reverse(arr){
    let newArr=[];
    for(let i =0; i<arr.length; i++)
        newArr[i] = arr[arr.length-1-i]

    return newArr;
}

console.log(reverse([1,2,3,4,5]))