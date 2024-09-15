// 3 вида функций:











// функция которая возвращает значение
function sum(arg1, arg2) {
    return arg1 + arg2;
}

console.log(sum(5, 4)); // 9

// 2. Function Expression
const sayHi = function (firstName, lastName) {
    // литеральные скобки - способо передачи переменных в строку
    console.log(`Hello ${firstName} ${lastName}`);
};

sayHi("John", "Johnson");

// !! Главная разница между Function Declaration и Expression: Function Declaration можно вызвать до ее инициализации
// а Expression нельзя т.к будет ошибка

// 3. Arrow Function
const funct2 = () => {
    console.log("I am Arrow function");
};

funct2();

const user = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    sayHi:() => {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.age);
        console.log(this);
    },
};

user.sayHi();