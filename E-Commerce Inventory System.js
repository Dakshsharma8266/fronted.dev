const products = [
    { id: 1, name: "Mobile", category: "Electronics", price: 10000, stock: 5 },
    { id: 2, name: "Laptop", category: "Electronics", price: 50000, stock: 2 },
    { id: 3, name: "Shoes", category: "Fashion", price: 1500, stock: 20 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 500, stock: 50 }
];

// 1. Low stock
function getLowStockProducts() {
    return products.filter(p => p.stock < 10);
}

// 2. Sort by price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + (p.price * p.stock), 0);
}

// 4. Group by category
function groupByCategory() {
    return products.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());
console.log("Sorted:", sortProductsByPrice());
console.log("Total Value:", calculateTotalInventoryValue());
console.log("Grouped:", groupByCategory());
