// ShoppingCart Model (Singleton)
class ShoppingCart {
    constructor() {
        if (ShoppingCart.instance) {
            return ShoppingCart.instance;
        }
        this.items = [];
        ShoppingCart.instance = this;
    }

    addItem(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items = this.items.filter((item) => item.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

module.exports = ShoppingCart;