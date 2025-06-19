var numini = 5
var numFin = 21
var mapita = new Map ([[1,numini],[2,numini+1],])
let setsito = new Set ()


var fibonacci = (numini,numFin) => {
    let a = numini
    let b = numini+1
    var list = [a,b];
    var i = 3
    // mapita.set(i++, a)
    // mapita.set(i++, b)
    while(true){
        var siguiente = a + b
        if (siguiente > numFin) break 
        list.push(siguiente)
        a = b
        b = siguiente 
        mapita.set (i++,siguiente)
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
    
    setsito.add(a,b)
    while(true){
        var siguiente = a + b
        if (siguiente > numFin) break 
        a = b
        b = siguiente 
        setsito.add(siguiente)
    }
    return setsito
}
console.log(fibonaccito(0,numFin))