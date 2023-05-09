console.clear();

function empty () {
    return false;
}

console.log(empty(true));
console.log(empty('true'));
console.log(empty(Infinity));

console.log(`------------------------------------------------------`);

function multiplay(a,b){
    if (typeof a !== 'number'){
        return "Error - pirmas netinkamas";
    } 
    if (typeof b !== 'number'){
        return "Error - antras netinkamas";
    } 
    if (!isFinite(a)) {
        return "Error - pirma reiksme negalima";
    }
    if (!isFinite(b)) {
        return "Error - antra reiksme negalima";
    }
   
    const result = a * b;
    return result;
}

console.log(multiplay(5, 6));
console.log(multiplay('asd', 6));
console.log(multiplay(5, 'asdf'));
console.log(multiplay('asdf', 'asdf'));
console.log(multiplay(Infinity, 6));
console.log(multiplay(5, Infinity));
console.log(multiplay(-Infinity, Infinity));
console.log(multiplay(NaN, Infinity));


console.log(`--------------------------------------------------------------`);

