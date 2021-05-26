let images = [
    {
        id: 1,
        title: 'автомобиль 1',
        src: 'img/big_car1.webp',
    },
    {
        id: 2,
        title: 'автомобиль 2',
        src: 'img/big_car2.webp',
    },
    {
        id: 3,
        title: 'автомобиль 2',
        src: 'img/big_car4.webp',
    },
];

let images_count = images.length;
if (images_count > 0) {
    let box_carusel = document.getElementById('carusel_images');
    let div_img = document.createElement("img");
    div_img.id = "image";
    div_img.src = images[0].src;
    div_img.setAttribute('data-id', 0);

    box_carusel.appendChild(div_img);

    if (images_count > 1) {
        let box_carusel_buttons = document.getElementById('carusel_buttons');
        let button_left = document.createElement("button");
        let button_right = document.createElement("button");
        button_left.id = "button_left";
        button_left.innerText = "<- Назад";
        button_left.onclick = load_img;
        button_right.id = "button_right";
        button_right.innerText = "Вперед ->";
        button_right.onclick = load_img;
        box_carusel_buttons.appendChild(button_left);
        box_carusel_buttons.appendChild(button_right);
    }
}

function load_img() {
    if (this.id != null) {
        let img = document.getElementById('image');
        let next_img_index = img.getAttribute('data-id');
        if (this.id == "button_left") {
            if (next_img_index == 0) {
                next_img_index = images_count - 1;
            } else {
                next_img_index = +img.getAttribute('data-id') - 1;
            }
        }
        if (this.id == "button_right") {
            if (next_img_index == images_count - 1) {
                next_img_index = 0;
            } else {
                next_img_index = +img.getAttribute('data-id') + 1;
            }
        }
        img.src = images[next_img_index].src;
        img.setAttribute('data-id', next_img_index);
    }
}