console.clear();

/*
TYPEOF - operatorius duomens tipo nustatymui
*/

const a = typeof 5;
console.log(a);

const b = typeof '';
console.log(b);

const c = typeof true;
console.log(c);

const d = typeof false;
console.log(d);

console.log(`-----------------------------------------------------`)

function sum (a, b) {
    return a + b;
}

const e = typeof sum;
console.log(e);

console.log(`------------------------------------------------------`)

const f = typeof [];
console.log(f);

const g = typeof typeof 5;
console.log(g);

const h = typeof undefined;
console.log(h);

console.log(`------------------------------------------------------`)

function example () {
    return example;
}

console.log('>>>', typeof example());
