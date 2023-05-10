console.clear();

console.log('------Funkcijos----------------------------------------------------');

// Funkcija pavadinimu “tusciaFunkcija”: nepriima jokių kintamųjų
// neatlieka jokios vidinės logikos gražina boolean tipo reikšmę “false”
// TESTAS:
// console.log( tusciaFunkcija() );
// rezultatas: false

function empty () {
    return false;
}

console.log(empty(true));
console.log(empty('true'));
console.log(empty(Infinity));

// Funkcija pavadinimu “daugyba”: priima du skaičiaus tipo kintamuosius
// atskirame kintamajame įsimena sandaugos reikšmę gražina saudaugos rezultatą
// TESTAI:
// console.log( daugyba( skaicius1, skaicius2 ) );
// console.log( daugyba( skaicius3, skaicius2 ) );
// console.log( daugyba( skaicius1, skaicius3 ) );
// rezultatas: teisingos reikšmės;

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

// Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”: priima vieną kintamąjį
// jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą 
// “Pateikta netinkamo tipo reikšmė.” priešingu atveju, funkcija tęsia darbą
// į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį gražina skaitmenų kiekį
// TESTAI:
// console.log( skaitmenuKiekisSkaiciuje( 5 ) );
// rezultatas: 1
// console.log( skaitmenuKiekisSkaiciuje( 781 ) );
// rezultatas: 3
// console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// rezultatas: 11
// console.log( skaitmenuKiekisSkaiciuje( true ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”
// console.log( skaitmenuKiekisSkaiciuje( NaN ) );
// rezultatas: “Pateikta netinkamo tipo reikšmė.”



console.log('----------------------------------------------------------');

// Funkcija pavadinimu “isrinktiRaides”: priima du kintamuosius:
// pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
// antrasis nurodo kas kelintą raidę išrinkti patikrinti, ar pirmasis
// kintamasis yra teksto tipo: jei ne, išvedame pranešimą “Pirmasis kintamasis
// yra netinkamo tipo.” priešingu atveju tęsiame darbą patikrinti, ar pirmasis
// kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
// jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
// priešingu atveju tęsiame darbą patikrinti, ar antrasis kintamasis yra
// skaičiaus tipo: jei ne, išvedame pranešimą “Antrasis kintamasis yra
// netinkamo tipo.” priešingu atveju tęsiame darbą patikriname, ar antrojo
// kintamojo vertė yra didesnė už nulį: jei ne, išvedame pranešimą 
// “Antrasis kintamasis turi būti didesnis už nulį.” priešingu atveju tęsiame
// darbą patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo
// kintamojo ilgį: jei ne, išvedame pranešimą “Antrasis kintamasis turi būti
// ne didesnis už pateikto teksto ilgį.” priešingu atveju tęsiame darbą
// išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo
// žingsnį) išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto
// tipo gražina rezultatą TESTAI:
// console.log( isrinktiRaides( “abcdefg”, 2 ) ); rezultatas: “bdf”
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) ); rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) ); rezultatas: “Antrasis kintamasis
// turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) ); rezultatas: “Antrasis kintamasis
// turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) ); rezultatas: “Pirmasis kintamasis
// yra netinkamo tipo.”

function fillterLetters (zodis, kasKelintas) {
   if(typeof zodis !== 'string') {
        return 'pirmas zodis netinkamas'
   }
   if (zodis.length > 100 || zodis.length === 0) {
        return 'pirmojo reiksme netinkama'
   }
   if (typeof kasKelintas !== 'number' && kasKelintas > 0) {
        return 'antras kintamasis netinkamas'
   }
   if (kasKelintas <= 0){
        return 'antras kintamasis turi buti didesnis uz nuli'
   }
   if (zodis.length < kasKelintas){
        return 'antras kintamasis turi buti ne didesnis uz teksto ilgi'
   }
   let atsakimas='';
   for (let i = kasKelintas - 1; i < zodis.length; i = i += kasKelintas) {
    atsakimas += zodis[i];
   }
   console.log(atsakimas);
  return `${zodis} ${kasKelintas}`;
}

console.log(fillterLetters('bitukas', 2));

console.log('bdf', `-->` , fillterLetters('abcdefg', 2));
// console.log( isrinktiRaides( “abcdefghijkl”, 3 ) ); rezultatas: “cfil”
// console.log( isrinktiRaides( “abc”, 0 ) ); rezultatas: “Antrasis kintamasis
// turi būti didesnis už nulį.”
// console.log( isrinktiRaides( “abc”, 4 ) ); rezultatas: “Antrasis kintamasis
// turi būti ne didesnis už pateikto teksto ilgį.”
// console.log( isrinktiRaides( 1561, 2 ) ); rezultatas: “Pirmasis kintamasis
// yra netinkamo tipo.”