console.clear();
/*
IF - palyginimas

Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===, !=, !==,
naudotini: >, <, >=, <=, ===, !==,
nenaudotini: ==, !=,

Loginiai operatoriai:
&& (and), || (or), ! (not),

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/

if (4 > 2) {
    console.log('taip');
}

if (7 < 1) {
    console.log('7 < 1');
} else {
    console.log('7 ne < uz 1');
}

console.log(`-------------------------------------------------`);

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metu`);
}

const userAge1 = 20;
const ageLimit1 = 18;

if (userAge1 >= ageLimit1) {
    console.log('uzeik');
} else {
    console.log(`dar palauk ${ageLimit1 - userAge1} metu`);
}

console.log(`-----------------------------------------------------------`);

const diena = 8;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios dienos nera');
};

console.log(`--KODO nestinimas--(ifas ife)--------------------------------`);

const arSvieciaSaule = true;
const arLyja = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisime i kiema';
    if (arLyja) {
        kaDaryti ='stebesime vaivorykste';   
     } else {
        kaDaryti ='deginsimes';
     }
} else {
    kaDaryti = 'kodinsime';
}

console.log(kaDaryti);


const arSvieciaSaule1 = false;
const arLyja1 = false;

let kaDaryti1 = 'nezinau';

if (arSvieciaSaule1) {
    kaDaryti1 = 'eisime i kiema';
    if (arLyja1) {
        kaDaryti1 ='stebesime vaivorykste';   
     } else {
        kaDaryti1 ='deginsimes';
     }
} else {
    kaDaryti1 = 'kodinsime';
}

console.log(kaDaryti1);


const arSvieciaSaule2 = true;
const arLyja2 = true;

let kaDaryti2 = 'nezinau';

if (arSvieciaSaule2) {
    kaDaryti2 = 'eisime i kiema';
    if (arLyja2) {
        kaDaryti2 ='stebesime vaivorykste';   
     } else {
        kaDaryti2 ='deginsimes';
     }
} else {
    kaDaryti2 = 'kodinsime';
}

console.log(kaDaryti2);


const arSvieciaSaule3 = false;
const arLyja3 = false;

let kaDaryti3 = 'nezinau';

if (arSvieciaSaule3) {
    kaDaryti3 = 'eisime i kiema';
    if (arLyja3) {
        kaDaryti3 ='stebesime vaivorykste';   
     } else {
        kaDaryti3 ='deginsimes';
     }
} else {
    kaDaryti3 = 'kodinsime';
    if (arLyja3) {
        kaDaryti3 = 'koks skirtumas';
    } else {
        kaDaryti3 = 'skaiciuosime zvaigzdes';
    }  
}

console.log(kaDaryti3);

const arSvieciaSaule4 = false;
const arLyja4 = true;

let kaDaryti4 = 'nezinau';

if (arSvieciaSaule4) {
    kaDaryti4 = 'eisime i kiema';
    if (arLyja4) {
        kaDaryti4 ='stebesime vaivorykste';   
     } else {
        kaDaryti4 ='deginsimes';
     }
} else {
    kaDaryti4 = 'kodinsime';
    if (arLyja4) {
        kaDaryti4 = 'koks skirtumas';
    } else {
        kaDaryti4 = 'skaiciuosime zvaigzdes';
    }  
}

console.log(kaDaryti4);


console.log(`--------------------------------------------------------`);

// Stengtis nenaudoti

const day = 8;

if (day === 1) {
    console.log('pirma');
} else {
    if (day === 2) {
        console.log('antra');
    } else {
         if (day === 3) {
            console.log('trecia'); 
        } else {
            if (day === 4) {
                console.log('ketvirta'); 
            } else {
                if (day === 5) {
                    console.log('penkta');
                } else {
                    if (day === 6) {
                        console.log('sesta'); 
                    } else {
                        if (day === 7) {
                            console.log('sekma');
                        } else {
                            console.log('nieko nesakau');
                        }
                    }
                }        
            }                    
        }                       
    }                            
};

console.log(`------------------------------------------------------`);


const dd = 4;
let kokiaDiena = 'tokios dienos nera';

if (dd === 1) {
    kokiaDiena = 'pirmadienis';
};

if (dd === 2) {
    kokiaDiena = 'antradienis';
};

if (dd === 3) {
    kokiaDiena = 'treciadienis';
};

console.log(kokiaDiena);

console.log(`---------------------------------------------------------`);

const siandiena = 8;

const dienuPavadinimai = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirtadienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis',
];

const savaitesDiena = dienuPavadinimai[siandiena - 1];

if (savaitesDiena === undefined) {
    console.log('nera tokios dienos');
} else {
    console.log(savaitesDiena);
}

console.log(`---FUNKCIJA----------------------------------------------------`);

const siandien = 3;

function kokiaSavaitesDiena(dienosNr) {
    const dienuPavadinimai = [
        'pirmadienis',
        'antradienis',
        'treciadienis',
        'ketvirtadienis',
        'penktadienis',
        'sestadienis',
        'sekmadienis',
    ];

    const savaitesDiena = dienuPavadinimai[dienosNr - 1];

    if (savaitesDiena === undefined) {
        return 'nera tokios dienos';
    } else {
        return savaitesDiena;
    }
}

console.log(kokiaSavaitesDiena(siandien));
console.log(kokiaSavaitesDiena(1));
console.log(kokiaSavaitesDiena(2));
console.log(kokiaSavaitesDiena(3));
console.log(kokiaSavaitesDiena(4));
console.log(kokiaSavaitesDiena(5));
console.log(kokiaSavaitesDiena(6));
console.log(kokiaSavaitesDiena(7));
console.log(kokiaSavaitesDiena(8));

console.log(`-----------------------------------------------------`);

if (777 === 888) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (777 === 888) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (777 !== 888) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (777 === 777) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (777 !== 777) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

console.log(`------------------------------------------------------`);

if ('labas' === 'labas') {
    console.log('taip');
} else {
    console.log('ne');
}

if ('Labas' === 'labas') {
    console.log('taip');
} else {
    console.log('ne');
}

if ('Labas' === 888) {
    console.log('taip');
} else {
    console.log('ne');
}

if ('888' === 888) {
    console.log('taip');
} else {
    console.log('ne');
}

if ('888' == 888) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log(`----------------------------------------------------`);

console.log('888' / 2);
console.log('888' / '2');
console.log('888' * '2');
console.log('888' * 2);
console.log('888 ' / 2);
console.log('88,8' / 2);
console.log('88.8' * 2);

console.log(`----LOGINIAI OPERATORIAI-----------------------------------------------`);

if (4 > 2) {
    if (8 < 20) {
        console.log('and1');
    }
}

if (4 > 2 && 8 < 20) {
    console.log('and2');
}

if (1 < 0 || 2 < 4) {
    console.log('arba');
}

if (1 === 1 && 2 === 3 || 4 === 4) {
    console.log('mix');
}

if (1 === 2 && 2 === 3 || 4 === 4) {
    console.log('mix');
}

if (1 === 2 || 2 === 3 || 4 === 4) {
    console.log('mix');
}

if (1 === 2 || 2 === 3 && 4 === 4) {  // neatvaizduoja terminale,
    console.log('mix');               // nes netenkina salygos
}

if (1 === 1 && 2 === 2 || 3 === 4) {
    console.log('mix');
}

if (0 === 0 || 2 === 8 && 4 === 4) {
    console.log('mix');
}

// ((0 === 0 || 2 === 8) && 4 === 4) 
// (( true || 2 === 8) && 4 === 4) 
// (( true || false) && 4 === 4)
//  true && 4 === 4
//  true && true
//  true

console.log(`------------------------------------------------------`);

const a = true;

if (a) {
    console.log('taip');
} else {
    console.log('ne');
}

const b = false;

if (b) {
    console.log('taip');
} else {
    console.log('ne');
}

const c = false;

if (c) {
    console.log('ne');
} else {
    console.log('taip');
}

const d = true;

if (d) {
    console.log('ne');
} else {
    console.log('taip');
}

const e = true;

if (!e) {
    console.log('ne');
} else {
    console.log('taip');
}

const f = false;

if (!f) {
    console.log('ne');
} else {
    console.log('taip');
}

console.log(`------------------------------------------------------`);

const error = true;

if (error) {
    console.log('error');
} else {
    console.log('all good');
}

const error1 = false;

if (error1) {
    console.log('error');
} else {
    console.log('all good');
}

const error2 = true;

if (!error2) {
    console.log('all good');
} else {
    console.log('error');
}

const error3 = false;

if (!error3) {
    console.log('all good');
} else {
    console.log('error');
}

console.log(`---------------------------------------------------------`);

// Visi skaiciai - TRUE, isskyrus 0 ir NaN
// undifined - FALSE
// null - FALSE
// visi STRING - TRUE, isskirus tuscias ' '  'asdasd'
// visos FUNCTION - TRUE (     ) {}
// visi ARRAY - TRUE     (   []) {}
// visi OBJECT - TRUE    (   {}) {}


const nameImputValue = '';

if (!nameImputValue) {
    console.log('kazkas');
} else {
    console.log('neKazka');
}

const negative = !nameImputValue;
console.log(negative);

const nameImputValue1 = 'asdasd';

if (!nameImputValue1) {
    console.log('kazkas');
} else {
    console.log('neKazka');
}

const negative1 = !nameImputValue1;
console.log(negative1);