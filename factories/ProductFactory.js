const Product = require("../modals/Products");

// ProductFactory (Factory Pattern)
class ProductFactory {
    static createProduct(id, name, price) {
        return new Product(id, name, price);
    }
}

module.exports = ProductFactory;