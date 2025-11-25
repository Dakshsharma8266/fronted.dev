const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

addBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;

    const li = document.createElement("li");
    li.innerHTML = `${input.value} 
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
    list.appendChild(li);

    input.value = "";
});

// EVENT DELEGATION
list.addEventListener("click", (e) => {
    const li = e.target.parentElement;

    if (e.target.classList.contains("delete")) {
        li.remove();
    }

    if (e.target.classList.contains("edit")) {
        const oldText = li.firstChild.textContent.trim();
        li.innerHTML = `<input class="editing" value="${oldText}">`;
        const editInput = li.querySelector("input");

        editInput.focus();

        document.addEventListener("click", function handler(ev) {
            if (ev.target !== editInput) {
                li.innerHTML = `${editInput.value} 
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>`;
                document.removeEventListener("click", handler);
            }
        });
    }
});
