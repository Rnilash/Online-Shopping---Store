document.addEventListener("DOMContentLoaded", async function() {
    const productModel = new ProductModel();
    const productController = new ProductController(productModel);
    await productController.init();
});
