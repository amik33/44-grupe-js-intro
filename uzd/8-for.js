console.clear();

const input = '6533191236798007122422182554238126263529536544222328307236936753010244732513224577497223162639637646030460416487659011458815933062537501156700688303795084';

// Kurie skaiciai pasikartoja dazniausiai( vienas skaicius, su masyvu = 10)

const daznis = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (const symbol of input ) {
    const number = parseInt(symbol);
    daznis[number]++;
}

console.log(daznis);
console.log('------------------------------');

let maxSkacius = -1;
let maxKiekis = -Infinity;

for (let i = 0; i < daznis.length; i++) {
    const kiekis = daznis[i];
    if (kiekis > maxKiekis) {
        maxKiekis = kiekis;
        maxSkacius = i;
    }
}

console.log(maxKiekis, maxSkacius);
console.log('--------------------------------');

const maxPasikartojantysSkaiciai = [];
for (let i = 0; i < daznis.length; i++) {
    if (daznis[i] === maxKiekis) {
        maxPasikartojantysSkaiciai.push(i);
    }
}

console.log(maxPasikartojantysSkaiciai);
console.log('===================================');

// Kurie skaiciai pasikartoja dazniausiai( vienas skaicius, su masyvu 100)

const daznis1 = Array(100).fill(0);

for (let i = 0; i < input.length -1; i++) {
    const number = parseInt(input[i] + input[i + 1]);
    daznis1[number]++;
}

console.log(daznis1);
console.log('================================');

let maxSkacius1 = -1;
let maxKiekis1 = -Infinity;

for (let i = 0; i < daznis1.length; i++) {
    const kiekis = daznis1[i];
    if (kiekis > maxKiekis1) {
        maxKiekis1 = kiekis;
        maxSkacius1 = i;
    }
}

console.log(maxKiekis1, maxSkacius1);
console.log('=================================');

const maxPasikartojantysSkaiciai1 = [];
for (let i = 0; i < daznis1.length; i++) {
    if (daznis1[i] === maxKiekis1) {
        maxPasikartojantysSkaiciai1.push(i);
    }
}

console.log(maxPasikartojantysSkaiciai1);
console.log('=================================');

// Kurie skaiciai pasikartoja dazniausiai( du skaiciai, su masyvu 100)

const daznis2 = {};

for (let i = 0; i < input.length - 1; i++) {
    const number = parseInt(input[i] + input[i + 1]);
    if (daznis2[number]) {
        daznis2[number]++;
    } else {
        daznis2[number] = 1;
    }
  
}

console.log(daznis2);
console.log('--------------------------------');

let maxSkaicius2 = -1;
let maxKiekis2 = 0;

for (const key in daznis2) {
    if (daznis2[key] > maxKiekis2) {
        maxKiekis2 = daznis2[key];
        maxSkaicius2 = key;
    }
}

console.log(maxKiekis2, maxSkaicius2);
console.log('--------------------------------');

const maxPasikartojantysSkaiciai2 = [];

for (const key in daznis2) {
    if (daznis2[key] === maxKiekis2) {
        maxPasikartojantysSkaiciai2.push(key);
    }
}

console.log(maxPasikartojantysSkaiciai2);
console.log('=================================');