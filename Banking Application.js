class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid amount");
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) throw new Error("Insufficient balance");
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

try {
    acc.deposit(1000);
    console.log("Balance:", acc.getBalance());

    acc.withdraw(500);
    console.log("Balance:", acc.getBalance());

    acc.withdraw(700); // error
} catch (err) {
    console.log("Error:", err.message);
}
