const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const bigImg = document.getElementById("bigImg");

document.querySelector(".gallery").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        bigImg.src = e.target.src;
        modal.classList.remove("hidden");
    }
});

modal.addEventListener("click", () => modal.classList.add("hidden"));

modalContent.addEventListener("click", (e) => e.stopPropagation());
