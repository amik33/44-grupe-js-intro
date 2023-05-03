console.clear();

/*
OBJECT - objektas.
{
    key1: value1,
    key2: value2,
    key3: value3,
}
ARRAY - supaprastintas objektas.
STRING - supaprastintas array.
*/
//          Vardas, amzius, vedybinisStatusas
const petras = ['Petras', 99, true];
const maryte = ['Maryte', 88, false];

// Sveiki, mano vardas VARDAS ir man KAZKIEK metu.
const s1 = `Sveiki, mano vardas ${petras[0]} ir man ${petras[1]} metu.`;
console.log(s1);

const s2 = `Sveiki, mano vardas ${maryte[0]} ir man ${maryte[1]} metu.`;
console.log(s2);

console.log(`--------------------------------------------------`)

const jonas = {
    name: 'Jonas',
    age: 66,
    isMaried: false,
};

const ona = {
    age: 33,
    isMaried: true,
    name: 'Ona',
};

console.log(jonas);
console.log(ona);

console.log(ona);
console.log(ona['age']);
console.log(ona['isMaried']);
console.log(ona['name']);
console.log(jonas);
console.log(jonas['isMaried']);
console.log(jonas['name']);
console.log(jonas['age']);

console.log(`-----------------------------------------------------`)

const random = {                                  
    tekstas: 'tekstas',
    skaicius: 777,
    arTiesa: true,               // Tinkamiausias naudojimui
    kitas_variantas: 'opapa',
    'su tarpu': 'ajajai',
};

console.log(random['tekstas']); 
console.log(random['skaicius']); 
console.log(random['arTiesa']); 
console.log(random['kitas_variantas']); 
console.log(random['su tarpu']); 

console.log(`----------------------------------------------------`)

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

console.log(`-----------------------------------------------------`)

const pazymiai = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.log(pazymiai[0]);
console.log(pazymiai[1]);
console.log(pazymiai[2]);
console.log(pazymiai[3]);
console.log(pazymiai[4]);

console.log(`-------------------------------------------------------`)

const student = {
    name: 'Bruce Lee',
    age: 83,
    movies: [
        {
            title: 'Game of Death',
            year: 1978,
            actors: [
                'Bruce Lee',
                'Bruce Lee1',
            ],
        },
        {
            title: 'The Green Hornet',
            year: 1974,
            actors: [
                'Bruce Lee2',
                'Bruce Lee3',
            ],
        },
        {
            title: 'Enter the Dragon',
            year: 1973,
            actors: [
                'Bruce Lee4',
                'Bruce Lee5',
            ],
        },
    ]
};

console.log(student);
console.log(student['age']);
console.log(student['name']);
console.log(student['movies']);

console.log(`----------------------------------------------------------`)

console.log(student['age']);
console.log(student.age);
console.log(student['name']);
console.log(student.name);

console.log(`----------------------------------------------------------`)

console.log(student.movies.length);
console.log(student.movies[0].title);
console.log(student.movies[1].title);
console.log(student.movies[2].title);
console.log(student.movies[0].year);
console.log(student.movies[1].year);
console.log(student.movies[2].year);
console.log(student.movies[0].actors);
console.log(student.movies[1].actors);
console.log(student.movies[2].actors);
console.log(student.movies[0].actors[1]);
console.log(student.movies[1].actors[0]);
console.log(student.movies[2].actors[1]);

console.log(`----------------------------------------------------------`)