const box = document.getElementById("box");
const xSpan = document.getElementById("x");
const ySpan = document.getElementById("y");

box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    xSpan.textContent = e.clientX - rect.left;
    ySpan.textContent = e.clientY - rect.top;
});

box.addEventListener("dblclick", (e) => {
    const rect = box.getBoundingClientRect();
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (e.clientX - rect.left) + "px";
    dot.style.top = (e.clientY - rect.top) + "px";
    box.appendChild(dot);
});
