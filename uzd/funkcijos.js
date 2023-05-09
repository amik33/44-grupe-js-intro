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



