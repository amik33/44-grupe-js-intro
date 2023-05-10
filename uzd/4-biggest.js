console.clear();

// console.log(biggest('labas'));
// console.log(biggest([]));

// function biggest(list) {
//     if (list nera array) {
//         return 'ERROR';
//     }

//     let result = list[0];

//     for (let i = 1; i < list.length; i++) {
//         if (list[i] > result) {
//             result = list[i];
//         }
//     }

//     return result;
// }

// function biggest(list) {
//     // tikriname tipa - turi buti array
//     if (!Array.isArray(list)) {
//         // jeigu ne array - return error
//         return 'ERROR: duok array';
//     }

//     // turiu array
//     // jeigu tuscias - return error
//     if (!list.length) {
//         return 'ERROR: duok ne tuscia array';
//     }

//     // turiu ne tuscia array
//     // sakom, jog didziausias skaicius yra -Infinity
//     let biggest = -Infinity;

//     // su ciklu einame per array:
//     for (let i = 0; i < list.length; i++) {
//         // - tikriname ar array narys yra realus skaicius
//         if (typeof list[i] !== 'number' || !isFinite(list[i])) {
//             // - jei ne:
//             //      - tesiam, einam prie sekancio
//             continue;
//         }

//         // - jei taip (yra skaiciaus tipas):
//         //      - lyginame su pries zinoma didziausia reiksme
//         //      - jeigu nauja reiksme didesne - overwrite
//         if (list[i] > biggest) {
//             biggest = list[i];
//         }
//     }

//     // jeigu didziausias skaicius vis dar liko -Infinity:
//     if (biggest === -Infinity) {
//         // - return error - sarase nera nei vieno normalaus skaiciaus
//         return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
//     }

//     // graziname didziausia skaiciu
//     return biggest;
// }

function biggest(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: duok array';
    }

    if (!list.length) {
        return 'ERROR: duok ne tuscia array';
    }

    let biggest = -Infinity;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] !== 'number' || !isFinite(list[i])) {
            continue;
        }

    
        if (list[i] > biggest) {
            biggest = list[i];
        }
    }

    if (biggest === -Infinity) {
        return 'ERROR: sarase nera nei vieno normalaus skaiciaus';
    }

    return biggest;
}

console.log(biggest(true));
console.log(biggest('labas'));
console.log(biggest(['labas']));
console.log(biggest(['labas', true, [], NaN, -Infinity]));
console.log(biggest([]));

console.log(biggest([1]), '->', 1);
console.log(biggest([1, 2, 3]), '->', 3);
console.log(biggest([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggest([69, 69, 69, 69, 66]), '->', 69);
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);

// console.log(biggest('labas'));
// console.log(biggest([]));
console.log(biggest(['labas', 5, '7']), '->', 5);
