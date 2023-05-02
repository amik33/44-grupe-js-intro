console.clear();

function sum(a, b) {
    console.log('>>>', a, b);
    return a + b;
}
const s1 = sum(2, 3);
console.log(s1);

const s2 = sum(7, 5);
console.log(s2);

const s3 = sum(-9, -4);
console.log(s3);

console.log("-----------------------------------------------")

function hi(name) {
    console.log(name);
    return `Hi, my name is ${name}!`;
}

// Hi, my name is Petras!
// Hi, my name is Maryte!
// Hi, my name is Jonas!
// Hi, my name is Ona!

console.log(hi('Petras'));
console.log(hi('Maryte'));
console.log(hi('Jonas'));
console.log(hi('Ona'));

// Sveiki, as Petras ir man 16 metu.
// Sveiki, as Maryte ir man 160 metu.
// Sveiki, as Jonas ir man 36 metu.
// Sveiki, as Ona ir man 99 metu.

function prisistatymas(name, age) {
    return `Sveiki, as ${name} ir man ${age} metu.`;
}

console.log(prisistatymas('Petras', 16));
console.log(prisistatymas('Maryte', 160));
console.log(prisistatymas('Jonas', 36));
console.log(prisistatymas('Ona', 99));