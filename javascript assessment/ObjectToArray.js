function objectToArray(obj) {
    if(typeof obj !== 'object' ){
        return obj;
    }
    let ans = []
    for(let i in obj){
        element = [i,objectToArray(obj[i])]
        ans.push(element)
    }

    return ans;
}

console.dir(objectToArray({1:2,2:3,3:{1:2,2:3,3:{}}}),{depth:null})