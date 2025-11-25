const menu = {
    burger: 120,
    pizza: 250,
    fries: 80,
    coke: 50
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) throw new Error(`Invalid item ordered: ${item}`);
        return menu[item];
    });

    return prices.reduce((t, p) => t + p, 0);
}

try {
    const total = calculateBill(["pizza", "fries", "burger"]);
    console.log("Total Bill:", total);
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const total = calculateBill(["pizza", "samosa"]); // error
    console.log(total);
} catch (err) {
    console.log("Error:", err.message);
}
