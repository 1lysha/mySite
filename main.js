// Переменные

const smt = 123; 
// const не меняет значения
let smb = 123;
// let меняет значения

// Типы данных 

const name = "строка";
const number = 2;
const boolen = true;
const Null = null; // надо так, если хочешь обнулить
const underFind = undefined; // так делает консоль, мы делаем null
// Объекты, массивы


// typeof
const typeOf = true;
console.log(typeof typeOf); // Выведет тип данного - boolen

// BigInt 
console.log(49825012452039538039258n ); // Дает возможность вычислять большие числа ХХХХХХn 



// Шаблонные строки

let userName = "Илья";
let greeting = `Привет, ${userName}! Как дела?`

// Условие, операторы сравнения, лог операторы
/* > < >= <= 
== нестрогое сравнение
=== сторогое сравнение
!= нестрогое отрицание
!== строгое отрицание


&& = and
!true = not
*/


if ( /* условие */x == 7 ) {
    /* если условие верно, то выполняется действие*/
} else if (  /* условие */8 == 0 ) {
    /* если условие верно, то выполняется действие*/
}
else{
    /* если условие НЕ верно, то выполняется действие*/
}

// Тернарный оператор
// (условие) ? (условие верно) : (условие неверно);

// Функции (называем глаголом)
console.log('say hy');

function sayHy (){
    console.log('say hy');    // declaration
}

let sayHy = function () {
    console.log('say hy');   // expression
} 

sayHy; 


// Параметр в функции 'name'

function sayHy(name) {
    console.log(`salam ${name} kak dela?`);   
}

sayHy('Ilia'); 

// return 
function summ(a, b) {
    const result = a + b
    return result;
}

// Функция как аргумент 

function doSmt(func) {
    let x = 10;
    let y = 15;
    let result = func(x, y);
    return result
}

doSmt(summ) // x и у станут аргументами функции summ; значением будет их сумма


