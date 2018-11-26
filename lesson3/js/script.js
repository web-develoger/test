window.addEventListener('DOMContentLoaded', function() {
    // Получаем инфо для работы
    let products = document.querySelectorAll('.product');
    let   buttons = document.getElementsByTagName("button");
    let   open = document.getElementsByClassName("open")[0];
    // Создаем функцию для создания корзины
    function createCart() {
        // Элементы для корзины
        let cart = document.createElement("div"),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            close = document.createElement("button");

        // Классы элементов
        cart.classList.add('cart');
        field.classList.add('cart-field');
        close.classList.add('close');
        
        // Текст к элементам
        close.textContent = 'Закрыть';
        heading.textContent = 'Ин аур корзин';

        // Добавляем элеманты 
        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(close);
    }

    createCart();

    let field = document.querySelector('.cart-field'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.close');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            let item = products[i].cloneNode(true),
                btn = item.querySelector('button');

            btn.remove();
            field.appendChild(item);
            products[i].remove();
         })
    }

    function openCart() {
        cart.style.display = 'block';
    };
    function closeCart() {
        cart.style.display = 'none';
    };

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);
})