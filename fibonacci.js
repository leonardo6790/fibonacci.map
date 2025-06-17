var numini = 0
var numFin = 42
let mapita = new Map ()
let setsito = new Set ()
var fibonacci = (numini,numFin) => {
    let a = numini
    let b = numini+1
    var list = [a,b];
    let i = 0
    mapita.set (i++,a)
    while(true){
        var siguiente = a + b
        if (siguiente > numFin) break 
        list.push(siguiente)
        a = b
        b = siguiente 
        mapita.set (i++,b)
    }
    return mapita
}

console.log(fibonacci(numini,numFin));
var fibonacc = (numini,numFin) => {
    let a = numini
    let b = numini+1
    var list = [a,b];
    while(true){
        var siguiente = a + b
        if (siguiente > numFin) break 
        list.push(siguiente)
        a = b
        b = siguiente 
    }
    return list
}
console.log(fibonacc(numini,numFin));
var fibonaccito = (numini,numFin) => {
    let a = numini
    let b = numini+1
    var list = [a,b];
    while(true){
        var siguiente = a + b
        if (siguiente > numFin) break 
        list.push(siguiente)
        a = b
        b = siguiente 
    }
    return list
}