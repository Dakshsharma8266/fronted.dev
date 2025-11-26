// Q8.js - Retry mechanism

function submitOrder() {
    return new Promise((resolve, reject) => {
        Math.random() < 0.5 ? resolve("Order success") : reject("Order failed");
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch (err) {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw "Order could not be processed";
}

processOrder()
    .catch(err => console.error(err));
