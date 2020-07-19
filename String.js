const str = 'Hello Wasja';

console.log(str.startsWith('H')); // true
console.log(str.endsWith('a')); // true

//cheks if a certain part of string is inside
console.log(str.includes('ello')); // true

console.log(str.repeat(3));

console.log(str.trim()); // delete whitespace from left and right
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.padStart(10)); // defines a max length of a string
console.log(str.padStart(10, '12345')); // we can put some text at the beginning
console.log(str.padEnd(10, '12345')); // we can put some text at the end
