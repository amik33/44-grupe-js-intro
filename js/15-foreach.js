console.clear();



// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);

// }

// for (const mark of marks) {
//     console.log(mark);
// }

console.log('-------------------------------------------');

const marks = [10, 2, 8, 4, 6, 77];
const words = ['labas', 'rytas', 'Lietuva'];

function pavadinimas(item, index, list) {
    console.log(`reiksme ${item} yra ${index +1} is ${list.length}.`);
}

marks.forEach(pavadinimas);
words.forEach(pavadinimas);

marks.forEach(function (item, index, originallist)  {
    console.log(item, index, originallist);
});

