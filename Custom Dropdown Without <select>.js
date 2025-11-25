const mainBtn = document.getElementById("mainBtn");
const options = document.getElementById("options");

mainBtn.addEventListener("click", () => {
    options.classList.toggle("hidden");
});

options.addEventListener("click", (e) => {
    if (e.target.classList.contains("opt")) {
        mainBtn.textContent = e.target.textContent;
        options.classList.add("hidden");
    }
});

// CLOSING USING CAPTURING PHASE
document.addEventListener("click", () => {
    options.classList.add("hidden");
}, true);
