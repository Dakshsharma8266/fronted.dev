// Q10.js - Delivery pipeline async simulation

function step(name) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;
        setTimeout(() => {
            Math.random() < 0.9 ? resolve(name) : reject(name + " failed");
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log(await step("Step 1: Order taken"));
        console.log(await step("Step 2: Food prepared"));
        console.log(await step("Step 3: Package ready"));
        console.log(await step("Step 4: Out for delivery"));
        console.log("Delivery completed!");
    } catch (err) {
        console.log("Pipeline failed!");
    }
}

runPipeline();

/*
- async/await pauses execution at each await
- Event loop handles each promise asynchronously
*/
