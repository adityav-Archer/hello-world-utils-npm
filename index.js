let printHelloWorld = () => {
   return `hello world`;
}

let first = (arr, n) => {
    let newIdx;
    if(n || n <= 0 || isNaN(n)){
        newIdx = 1;
    }
    newIdx = (newIdx > arr.length) ? arr.length : newIdx;
    return arr.splice(0, newIdx);

}


module.exports = {
    printHelloWorld: printHelloWorld,
    first: first
}