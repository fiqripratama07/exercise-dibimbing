// object di javascript

console.log(user);

const weirdObject = {
    'prop-3': 'three',
    '3': 'three'
  };
  
  console.log(weirdObject['prop-3']);
  console.log(weirdObject[3]);

  const hero = {
    name: 'Batman',
    age: 15
  };
  
  // Object destructuring:
  const { name, age } = hero;
  console.log(age);

let user = {};
user = {
    name: "John",
    age: 40,
    weight: '150 kg'
}

console.log(user['age']);

// for in
for (let prop in user) {
    console.log(prop);
}

constructor
function Student(name, nim) {
    this.name = name;
    this.nim = nim;

    this.sayHi = () => "My Name is: "  + this.name;
    this.showNim = () => "nim : " + this.nim;
}

let pratama = new Student("Pratama", 1234);
let fiqri = new Student('Fiqri', 4321);

// console.log(fiqri.sayHi());
console.log(pratama.sayHi());
console.log(pratama.showNim());

// regex string
// literals object regex
let regex = /hello/;
console.log(regex.exec('hello world'));
console.log(regex.test('world'));

// // regex number
// validate by number
let regexNum = /[0-9]/;
console.log(regexNum.test('1'));

// regex character
let regexChar = /@/;
console.log(regexChar.test('pratama@'));
console.log(regexChar.exec('pra@tama'));

let func = () => ({});
console.log(func());

let number1 = 1;
let number2 = number1 + 1;
console.log(number2);


console.log(number2);
