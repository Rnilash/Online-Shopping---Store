class ProductModel {
    constructor() {
        this.products = [];
    }

    async fetchProducts() {
        try {
            const response = await fetch('../data/products.json');
            const data = await response.json();
            this.products = data.items;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}
