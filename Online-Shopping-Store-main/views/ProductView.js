class ProductView {
    constructor(product) {
        this.product = product;
    }

    render() {
        const div = document.createElement('div');
        div.classList.add('box');

        let stars = '';
        for (let i = 0; i < Math.floor(this.product.rating); i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        if (this.product.rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }

        div.innerHTML = `
            <div class="image">
                <img src="${this.product.image}" alt="${this.product.name}">
            </div>
            <div class="content">
                <div class="stars">
                    ${stars}
                </div>
                <h3>${this.product.name}</h3>
                <span class="price">Rs.${this.product.price.toFixed(2)}</span>
                <a class="btn" data-id="${this.product.id}">Add to cart</a>
            </div>
        `;

        return div;
    }
}
