console.clear();

console.log('------Kintamųjų inicijavimas-----------------------------------');

// Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const number = 1;
console.log(number);

const numb = 2;
console.log(numb);

const num = 3;
console.log(num);

// Sukurti 3 kintamuosius su teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const simbol = 'abc';
console.log(simbol);

const simb = 'bcd';
console.log(simb);

const sim = 'cde';
console.log(sim);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const list = [1, 2, 3, 4, 5];
console.log(list);

const list1 = [6, 7, 8, 9, 10];
console.log(list1);

const list2 = [11, 22, 33, 44, 55];
console.log(list2);

// Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
// Po kiekvieno jų inicijavimo, išvesti į console

const text = ['labas', 'rytas', 'vakaras', 'diena', 'naktis'];
console.log(text);

const text1 = ['Jonas', 'Petras', 'Jurgis', 'Antanas', 'Ona'];
console.log(text1);

const text2 = ['saule', 'menulis', 'zvaigzde', 'dangus', 'vaivorykste'];
console.log(text2);

console.log('---------Veiksmai su kintamaisiais------------------------------');

// Susumuoti visus skaičiaus tipo kintamuosius
// Rezultatą išvesti į console

const suma = number + numb + num;
console.log(suma);

// Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
// Rezultatą išvesti į console

const words = 'Sveiki';
const words1 = 'mano';
const words2 = 'vardas';
const personalName = 'Vardenis';

const suma1 = `${words}, ${words1} ${words2} ${personalName}.`;
console.log(suma1);

// Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai,
// pagal pateiktą logiką 1-2+3-4+5
// Rezultatą išvesti į console

const count0 = [5];
const count1 = [4];
const count2 = [3];
const count3 = [2];
const count4 = [1];

const count = count0 - count1 + count2 - count3 + count4;
console.log(count);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, 
// nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const one = 'one';
const two = 'two';
const three = 'three';
const four = 'four';
const five = 'five';

const zodziai = one + ', ' + two + ', ' + three + ', ' + four + ', ' + five; 
console.log(zodziai);
 
console.log('---------Kintamųjų palyginimas-------------------------------');

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį 
//“Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
// Tarpusavyje palyginti skaičiaus tipo kintamuosius: kuris didesnis kuris mažesnis
// ar jie lygūs ar jie nelygūs kuris didesnis arba lygus kuris mažesnis arba lygus

const a = 20;
const b = 10;

if (a > b) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
};

if (a < b) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
};

if (a >= b) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
};

if (a <= b) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
};

if (a !== b) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
};

if (a === b) {
    console.log('pomidoras');
    } else {
    console.log('bandykite dar karta');
};

// Išvesti teksto tipo kintamųjų ilgius

const tipas = 'tekstoTipas';
console.log(tipas.length);

const tipas1 = 'tekstoTipas1';
console.log(tipas1.length);

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius: kuris didesnis
// kuris mažesnis ar jie lygūs ar jie nelygūs kuris didesnis arba lygus
// kuris mažesnis arba lygus

const c = tipas.length;
const d = tipas1.length;

if (c > d) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (c < d) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (c >= d) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (c <= d) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (c === d) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (c !== d) {
    console.log('taip');
    } else {
    console.log('ne');
};

// Išvesti sąrašo tipo kintamųjų ilgius

const tipoIlgis = ['rope', 'kivi', 'slyva', 'vysnia', 'pupa'];

const ilgis0 = tipoIlgis[0].length;
const ilgis1 = tipoIlgis[1].length;
const ilgis2 = tipoIlgis[2].length;
const ilgis3 = tipoIlgis[3].length;
const ilgis4 = tipoIlgis[4].length;

console.log(ilgis0, ilgis1, ilgis2, ilgis3, ilgis4);
const e = tipoIlgis.length;

// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius: kuris didesnis
// kuris mažesnis ar jie lygūs ar jie nelygūs kuris didesnis arba lygus
// kuris mažesnis arba lygus

const kitasIlgis = ['arbuzas', 'apelsinas', 'mandarinas', 'bananas', 'anansas'];

const ilgis5 = kitasIlgis[0].length;
const ilgis6 = kitasIlgis[1].length;
const ilgis7 = kitasIlgis[2].length;
const ilgis8 = kitasIlgis[3].length;
const ilgis9 = kitasIlgis[4].length;

console.log(ilgis5, ilgis6, ilgis7, ilgis8, ilgis9);
const f = kitasIlgis.length;

if (e < f) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (e > f) {
    console.log('ne');
    } else {
    console.log('taip');
}

if (e >= f) {
    console.log('ne');
    } else {
    console.log('taip');
}

if (e <= f) {
    console.log('taip');
    } else {
    console.log('ne');
}

if (e === f) {
    console.log('ne');
    } else {
    console.log('taip');
}

if (e !== f) {
    console.log('ne');
    } else {
    console.log('taip');
};