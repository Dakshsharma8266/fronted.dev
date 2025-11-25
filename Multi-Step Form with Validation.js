const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3 = document.querySelector(".step3");
const summary = document.getElementById("summary");

document.getElementById("next1").onclick = () => {
    if (!name.value.trim()) return alert("Enter name");
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
};

document.getElementById("back1").onclick = () => {
    step2.classList.add("hidden");
    step1.classList.remove("hidden");
};

document.getElementById("next2").onclick = () => {
    if (!email.value.includes("@")) return alert("Invalid email");
    step2.classList.add("hidden");
    step3.classList.remove("hidden");
};

document.getElementById("back2").onclick = () => {
    step3.classList.add("hidden");
    step2.classList.remove("hidden");
};

document.getElementById("finish").onclick = () => {
    if (password.value.length < 6) return alert("Password too short");

    step3.classList.add("hidden");
    summary.classList.remove("hidden");
    summary.innerHTML = `
        <h3>Summary</h3>
        Name: ${name.value} <br>
        Email: ${email.value}
    `;
};
