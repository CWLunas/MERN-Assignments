const ProductController = require("../controller/product.controller"); 

module.exports = (app)=>{                                                               //CRUD Routes
    app.get("/api/products", ProductController.getAllProducts);

    app.get("/api/products/:id", ProductController.getProductById);

    app.post("/api/products", ProductController.createProduct);

    app.patch("/api/products/:id", ProductController.updateProduct);

   app.delete("/api/products/:id", ProductController.deleteProduct);
}