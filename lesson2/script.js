// === Задание №1 ===
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - Префиксная форма изначально инкрементирует
// d = b++; alert(d);           // 1 - Постфиксная форма инкрементирует после присвоения
// c = (2+ ++a); alert(c);      // 5 - Префиксная форма изначально инкрементирует
// d = (2+ b++); alert(d);      // 4 - Постфиксная форма инкрементирует после вычисления
// alert(a);                    // 3
// alert(b);                    // 3
// переменные равны, так как уже произашло инкрементирование


// === Задание №2 ===
// var a = 2;
// var x = 1 + (a *= 2);
// Ответ: 5


// === Задание №3 ===
let a = +prompt("Укажите целочисленное значение переменной \"a\"");
let b = +prompt("Укажите целочисленное значение переменной \"b\"");
if (!isNaN(a) && !isNaN(b)) {
    if (a >= 0 && b >= 0) {
        alert(a - b);
    } else if (a < 0 && b < 0) {
        alert(a * b);
    } else {
        alert(a + b);
    }
} else {
    alert("Введите числа!");
}


// === Задание №4 ===
let c = +prompt("Укажите целочисленное значение от 0 до 15");
switch (c) {
    case 0:
        alert("0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 1:
        alert("1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 2:
        alert("2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 3:
        alert("3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 4:
        alert("4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 5:
        alert("5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 6:
        alert("6, 7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 7:
        alert("7, 8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 8:
        alert("8, 9, 10, 11, 12, 13, 14, 15");
        break;
    case 9:
        alert("9, 10, 11, 12, 13, 14, 15");
        break;
    case 10:
        alert("10, 11, 12, 13, 14, 15");
        break;
    case 11:
        alert("11, 12, 13, 14, 15");
        break;
    case 12:
        alert("12, 13, 14, 15");
        break;
    case 13:
        alert("13, 14, 15");
        break;
    case 14:
        alert("14, 15");
        break;
    case 15:
        alert("15");
        break;
    default:
        alert("Укажите целочисленное значение от 0 до 15");
}

function numberList(c) {
    return (c < 15 ? c + " " + numberList (c + 1) : 15);
}
alert("Вывод рекурсивной фуекцией: " + numberList(c));


// === Задание №5 ===
function opertionSum(arg1 = 0 , arg2 = 0) {
    return arg1 + arg2;
}
function opertionSubtract(arg1 = 0 , arg2 = 0)  {
    return arg1 - arg2;
}
function opertionIncrease(arg1 = 0 , arg2 = 0)  {
    return arg1 * arg2;
}
function opertionDivision(arg1 = 0 , arg2 = 0)  {
    return arg1 / arg2;
}


// === Задание №6 ===
function mathOperation(arg1 = 0, arg2 = 0, operation = "сложение") {
    let result;
    switch (operation) {
        case "сложение":
            result = opertionSum(arg1, arg2);
            break;
        case "вычитание":
            result = opertionSubtract(arg1, arg2);
            break;
        case "умножение":
            result = opertionIncrease(arg1, arg2);
            break;
        case "деление":
            result = opertionDivision(arg1, arg2);
            break;
        default:
            result = "error";
    }
    return result;
}


// === Задание №7 ===
// null > 0 ложно, т.к. при таком сравнении null не приводится к 0
// null >= 0 истина, т.к. . при таком сравнении null приводится к 0
// null == 0 ложно, т.к. при таком сравнении null не приводится к 0
// Т.к. по разнаму работают оператиры сравнения, то и мы видим такой результат


// === Задание №8 ===
function power(val, pow) {
    return pow ? val * power(val, pow-1) : 1;
}
// alert(power(3,4));