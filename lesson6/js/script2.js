let cart_tems = [];
let products = {
    product_1: {
        id: 1,
        title: 'модель автомобиля 1',
        img: 'img/small_car1.webp',
        price: 10000,
    },
    product_2: {
        id: 2,
        title: 'модель автомобиля 2',
        img: 'img/small_car2.webp',
        price: 15000,
    },
};

window.onload = function() {
    cart();
};

let box_product = document.getElementById('products');

for (let index in products) {
    let product = products[index];
    let div_product = document.createElement("div");
    div_product.className = "product";

    let div_product_h2 = document.createElement("h2");
    div_product.innerText = product.title;

    let div_product_img = document.createElement("img");
    div_product_img.src = product.img;

    let div_product_price = document.createElement("p");
    div_product_price.innerText = product.price;

    let div_product_button = document.createElement("button");
    div_product_button.innerText = "Купить";
    div_product_button.setAttribute('data-id', product.id);
    div_product_button.onclick = product_add_cart;

    div_product.appendChild(div_product_h2);
    div_product.appendChild(div_product_img);
    div_product.appendChild(div_product_price);
    div_product.appendChild(div_product_button);

    box_product.appendChild(div_product);
}

function cart() {
    if (Object.keys(cart_tems).length > 0) {
        let box_cart = document.getElementById('cart');
        box_cart.innerHTML = "";
        let h2_cart = document.createElement("h2");
        h2_cart.innerText = "Корзина";
        box_cart.appendChild(h2_cart);
        let price_all = 0;
        for (let index in cart_tems) {
            let item = cart_tems[index];
            let price_item = item.count * products['product_' + item.id].price;
            price_all += price_item;
            let div_cart = document.createElement("div");
            div_cart.className = "cart-item";
            div_cart.innerText = products['product_' + item.id].title + ",  " + products['product_' + item.id].price + " руб., кол-во " + item.count  + "шт., " + price_item + " руб.";
            box_cart.appendChild(div_cart);
        }
        let div_cart = document.createElement("div");
        div_cart.innerText = "Всего: " + price_all + " руб.";
        box_cart.appendChild(div_cart);
    }
}

function product_add_cart() {
    let product_id = this.getAttribute('data-id');
    if (cart_tems['item_' + product_id] != null) {
        cart_tems['item_' + product_id].count += 1;
    } else {
        cart_tems['item_' + product_id] = {
            id: product_id,
            count: 1
        };
    }
    cart();
}