function miniMaxSum(arr) {
    // Write your code here
    let minimo = arr[0]
    let maximo = arr[0]
    for (let x = 1; x < arr.lenght; x++){
        if (arr[x] > maximo){
            maximo = arr[x]
        }
        if (arr[x] < minimo){
            minimo = arr[x]
}
}
return (minimo, maximo)
}

console.log(miniMaxSum())