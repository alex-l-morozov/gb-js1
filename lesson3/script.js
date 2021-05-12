// === Задание №1 ===
let number = 2;
while(number <= 100) {
    if(isNatural(number)) {
        if (number > 2) {
            document.write(", ");
        }
        document.write(number.toFixed());
    }
    number++;
}
function isNatural(number) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
document.write("<br><br>");



// === Задание №2,3 ===
let goods = [
    {
        id: 1,
        title: "Товар 1",
        price: 500,
        count: 5,
    },
    {
        id: 2,
        title: "Товар 2",
        price: 1500,
        count: 4,
    },
    {
        id: 3,
        title: "Товар 3",
        price: 2500,
        count: 3,
    },
    {
        id: 4,
        title: "Товар 4",
        price: 3500,
        count: 2,
    },
    {
        id: 5,
        title: "Товар 5",
        price: 4500,
        count: 1,
    }
];

function countBasketPrice() {
    let cost = 0;
    for (let item of goods ) {
        cost += item.price * item.count;
    }
    return cost;
}

console.log("Стоимость товаров в корзине: " + countBasketPrice());



// === Задание №4 ===
for (let i = 1; i <= 9; document.write(i.toFixed()), i++) {}



// === Задание №5 ===
let str = "";
for (let i = 1; i <= 20; i++) {
    if (i == 1) {

        str += "x"
    } else {
        str += " x"
    }
    console.log(str);
}