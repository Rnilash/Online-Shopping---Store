class ProductController {
    constructor(productModel) {
        this.productModel = productModel;
    }

    async init() {
        await this.productModel.fetchProducts();
        this.renderProducts();
    }

    renderProducts() {
        const products = this.productModel.getProducts();
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productView = new ProductView(product);
            productList.appendChild(productView.render());
        });

        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const itemId = event.target.getAttribute('data-id');
                const product = this.productModel.getProductById(itemId);
                CartController.addToCart(product);
            });
        });
    }
}
