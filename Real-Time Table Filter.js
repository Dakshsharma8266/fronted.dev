const search = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");
const noResult = document.getElementById("noResult");

search.addEventListener("input", () => {
    let found = false;
    const text = search.value.toLowerCase();

    rows.forEach(row => {
        const match = row.textContent.toLowerCase().includes(text);
        row.style.display = match ? "" : "none";
        if (match) found = true;
    });
    noResult.classList.toggle("hidden", found);
});
