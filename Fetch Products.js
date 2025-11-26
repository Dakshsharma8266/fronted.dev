// Q6.js - Fetch Product Data

async function loadProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        data.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("-------------------------");
        });
    } catch (err) {
        console.error("Failed to load products. Please try again.");
    }
}

loadProducts();
