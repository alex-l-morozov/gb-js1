let number = +prompt("Введите число от 0 до 999");

// первый вариант
function numberToObject(number) {
    this.hundred = Math.floor(number / 100);
    this.dozen = Math.floor((number - (this.hundred * 100)) / 10);
    this.unit = number - ((this.hundred * 100) + (this.dozen * 10));
}

// второй вариант
function numberToObject2(number) {
    this.hundred = 0;
    this.dozen = 0;
    this.unit = 0;
    switch (number.length) {
        case 3:
            this.hundred = number[2];
            this.dozen = number[1];
            this.unit = number[0];
            break;
        case 2:
            this.dozen = number[1];
            this.unit = number[0];
            break;
        default:
            this.unit = number[0];
    }
}

if ( number >= 0 && number <= 999) {
    let object = new numberToObject(number);
    console.log(object);
} else {
    console.log('Число превышает 999');
}