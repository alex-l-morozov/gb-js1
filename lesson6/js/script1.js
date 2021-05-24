let images = [
    {
        small: 'img/small_car1.webp',
        big: 'img/big_car1.webp',
    },
    {
        small: 'img/small_car2.webp',
        big: 'img/big_car2.webp',
    },
    {
        small: 'img/small_car3.webp',
        big: 'img/big_car3.webp',
    },
];

let img_small = document.getElementById('img_small');

for (let item of images) {
    let img = document.createElement("img");
    img.src = item.small;
    img.onclick = img_click;
    img.setAttribute('data-img-big', item.big);
    img_small.appendChild(img);
}

function img_click() {
    if (document.getElementById('img-big') != null) {
        document.getElementById('img-big').remove();
    }
    let img = new Image();
    img.src = this.getAttribute('data-img-big');
    img.id = 'img-big';
    img.onload = function() {
        let img_big = document.getElementById('img_big');
        img_big.appendChild(img);
    }
    img.onerror = function() {
        alert('картинка не существует');
    }
}
