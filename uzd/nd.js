console.clear();

function raides(tekstas, kintamieji) {
    const funkcijos = {
        'first': (tekstas) => tekstas.at(0),
        'last': (tekstas) => tekstas.at(-1,),
        'mid': (tekstas) => tekstas[Math.round(tekstas.length/2)-1],
        'size': (tekstas) => tekstas.length,
        'lowercase': (tekstas) => tekstas.toLowerCase(),
        'uppercase': (tekstas) => tekstas.toUpperCase(),
        'uppercaseCount': (tekstas) => tekstas.uppercaseCount,
        'lowercaseCount': (tekstas) => tekstas.lowercaseCount,
    };

    return funkcijos[kintamieji](tekstas);
}

console.log(raides('labas', 'first'));
console.log(raides('labas', 'last'));
console.log(raides('labas', 'mid'));
console.log(raides('labas', 'size'));
console.log(raides('labas', 'lowercase'));
console.log(raides('labas', 'uppercase'));
console.log(raides('labas', 'uppercaseCount'));
console.log(raides('labas', 'lowercaseCount'));


console.log('--------------------------------------------------');

for (let i = 0; i < 3; i++) {
    console.log('text')
}

console.log('-----------------------------------------------------');

for (let i = 0; i < 3; i++) {
    console.log('text')
}
 let i = 0; while (i < 3) {
    console.log('text'); i++;
}

console.log("---------------------------------------------------");

var x = 8;

for (let i = 0; i < x; i++ ) {
    console.log(i);
}

console.log('------------------------------------------------------');

var x = 8;

for (i = 0; i < x; i++) {
    console.log("the number " + i + " is still smaller that " + x );

}
console.log('-----------------------------------------------------');

var x = 8;

for (i = 0; i < x; i+=2) {
    console.log("the number " + i + " is still smaller that " + x );
}

console.log('-------------------------------------------------');

var x = 100;

for (i = 2; i < x; i+=5) {
    console.log("the number " + i + " is still smaller that " + x );
}




