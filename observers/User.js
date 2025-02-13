// User (Observer Pattern)
class User {
    constructor(name) {
        this.name = name;
    }

    update(order) {
        console.log(`${this.name}, your order #${order.id} status is now: ${order.status}`);
    }
}

module.exports = User;