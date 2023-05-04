console.clear();

/*
TERNARY

klausimas ? teigiama reiksme : neigiama reiksme;
*/

const leidimas = 10 >= 18 ? 'pilnametis': 'nepilnametis';
console.log(leidimas);

const leidimas1 = 20 >= 18 ? 'pilnametis': 'nepilnametis';
console.log(leidimas1);

const a = 1 
            ? 2 
            : 3;
console.log(a);

const b = 1 
            ? 2 
            : 3 
                ? 4 
                : 5;
console.log(b);

const c = 1 < 2 
                ? 3 
                    ? 4 
                    : 5 
                : 6;
console.log(c);

const d = 1 > 2 
                ? 3 
                : 4 
                    ? 5 
                    : 6;
console.log(d);

const e = 1 < 2 
                ? 3 
                    ? 4 
                    : 5 
                : 6 
                    ? 7 
                    : 8;
console.log(e);


