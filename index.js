console.log('Homework 3 - js operators, switch, loops')


// Создайте объект user.
let userName = prompt('What is your name?', '');
let userAge = prompt('How old are you?', '');
let userGender = prompt('What is your gender?', '');
const user = {
    name: userName,
    age: userAge,
    gender: userGender
}
console.log(user);
console.log(`User name is ${userName}, ${userAge} years old, gender is ${userGender}`);


// Работа с операторами.
const age = prompt('What is your favorit number?', '');
console.log(Number(age));
alert(age);

if (Number(age) % 2 == 0) {
    alert('This number is even')
} else {
    alert('This number is odd')
}


// Работа с условиями.
let a = prompt('a?', '');
console.log(a, typeof(a)) // string
a = +a
console.log(a, typeof(a)) // number

switch (true) {
    case a == 0:
        alert( 0 );
        break;
    case a == 1:
        alert( 1 );
        break;
    case a == 2 || a == 3:
        alert( '2,3' );
        break;
}


// Работа с циклами(loops). 1
// counted including 100 
// [1, 100]
let res = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        res += i;
    }
}
console.log(res);


// Работа с циклами(loops). 2
  let i = 0;
  while(i < 3) {
    alert( `number ${i}!` );
    i++;
  }



