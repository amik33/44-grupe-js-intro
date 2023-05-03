console.clear();

const marks = [];
console.log(marks);

marks.push(10);      // prideda gale terminalo masyve
marks.push(2);
marks.push(8);
console.log(marks);

marks.unshift(9);    // prideda pradzioje terminalo masyve
marks.unshift(8);
marks.unshift(7);
console.log(marks);

marks.shift();      // Panaikina pirma terminalo eileje
console.log(marks);

marks.pop();      // Panaikina paskutini terminalo eileje
console.log(marks);

marks.push(3);
console.log(marks);

console.log(`-AT-metodas paima sveikojo skaičiaus reikšmę ir grąžina elementą pagal tą indeksą, leidžiantį naudoti teigiamus ir neigiamus sveikuosius skaičius. Neigiami sveikieji skaičiai skaičiuojami nuo paskutinio masyvo elemento.-`);

console.log(marks[0]);
console.log(marks.at(0));

console.log(marks[3]);
console.log(marks.at(3));

const paskutinePozicija = marks.length -1;
console.log(marks);
console.log(marks[paskutinePozicija]);
console.log(marks.at(paskutinePozicija));
console.log(marks.at(-1));
console.log(marks.at(-2));
console.log(marks.at(-3));
console.log(marks.at(-4));
console.log(marks.at(-5));
console.log(marks.at(-6));

console.log(`-INCLUDES--metodas nustato, ar masyve yra tam tikra reikšmė tarp savo įrašų, atitinkamai grąžinant true arba false reiksmes.-`);

console.log(marks);
console.log(1, marks.includes(1));
console.log(2, marks.includes(2));
console.log(3, marks.includes(3));
console.log(5, marks.includes(5));
console.log(10, marks.includes(10));
console.log('labas', marks.includes('labas'));

console.log(`-INDEXOF metodas grąžina pirmąjį indeksą, kuriame masyve galima rasti nurodytą elementą, arba -1, jei jo nėra.-`);

marks.push(-1);
console.log(marks);
console.log(marks.indexOf(8));
console.log(marks.indexOf(9));
console.log(marks.indexOf(10));
console.log(marks.indexOf(777));
console.log(marks.indexOf(4));
console.log(marks.indexOf(-1));

console.log(`-JOIN-metodas sukuria ir grąžina naują eilutę, sujungdamas visus masyvo (arba į masyvą panašaus objekto) elementus, atskirtus kableliais arba nurodyta skyriklio eilute. Jei masyve yra tik vienas elementas, tada tas elementas bus grąžintas nenaudojant skyriklio.-`);

const visiPazymiai = marks.join();
console.log(visiPazymiai);
console.log(typeof visiPazymiai);

const visiPazymiai2 = marks.join('');
console.log(visiPazymiai2);

const visiPazymiai3 = marks.join(' -==- ');
console.log(visiPazymiai3);

console.log(`-REVERSE-metodas apverčia masyvą vietoje ir grąžina nuorodą į tą patį masyvą, pirmasis masyvo elementas dabar tampa paskutiniu, o paskutinis masyvo elementas tampa pirmuoju. Kitaip tariant, elementų tvarka masyve bus pasukta priešinga kryptimi, nei nurodyta anksčiau.-`);

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);

skaiciai.reverse();
console.log(skaiciai);

console.log(`-SLICE-metodas grąžina negilią masyvo dalies kopiją į naują masyvo objektą, pasirinktą nuo pradžios iki pabaigos (pabaiga neįtraukiama), kur pradžia ir pabaiga žymi to masyvo elementų indeksą. Pradinis masyvas nebus pakeistas.-`);

console.log(skaiciai);
console.log(skaiciai.slice(0));
console.log(skaiciai.slice(2));
console.log(skaiciai.slice(-3));
console.log(skaiciai.slice(2, 4));
console.log(skaiciai.slice(2, -2));
console.log(skaiciai.slice(1, 3));

console.log(`-SPLICE-metodas pakeičia masyvo turinį pašalindamas arba pakeisdamas esamus elementus ir (arba) įtraukdamas naujus elementus.-`);

console.log(skaiciai);

console.log(skaiciai.splice(2, 0, 'X'));
console.log(skaiciai);

console.log(skaiciai.splice(3, 1));
console.log(skaiciai);

console.log(skaiciai.splice(-2, 2));
console.log(skaiciai);

console.log(skaiciai.splice(0, 1, 1000));
console.log(skaiciai);

skaiciai[0] = 10;
skaiciai[skaiciai.length - 2] = 10;
console.log(skaiciai);