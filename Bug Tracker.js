// Q3.js - Bug Tracker using Promises

function getBugs() {
    return new Promise((resolve, reject) => {
        const apiFailed = Math.random() < 0.3;

        setTimeout(() => {
            if (apiFailed) {
                reject("API Failure! Could not fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(err => console.error(err));
