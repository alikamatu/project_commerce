// Product Model
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDetails() {
        return `${this.name} - $${this.price}`;
    }
}

module.exports = Product;