class CartController {
    static addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart');
    }

    static renderCart() {
        const cartList = document.getElementById('cart-list');
        const totalPriceElement = document.getElementById('total-price');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        cartList.innerHTML = '';
        let totalPrice = 0;

        if (cart.length === 0) {
            cartList.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                totalPrice += item.price;
                const itemElement = document.createElement('div');
                itemElement.classList.add('box');
                itemElement.innerHTML = `
                    <div class="image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="content">
                        <h3>${item.name}</h3>
                        <span class="price">Rs.${item.price.toFixed(2)}</span>
                        <button class="btn remove-btn" data-index="${index}">Remove</button>
                    </div>
                `;
                cartList.appendChild(itemElement);
            });

            totalPriceElement.textContent = totalPrice.toFixed(2);
        }

        cartList.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-btn')) {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                CartController.renderCart();
            }
        });
    }
}
