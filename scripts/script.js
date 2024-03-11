// Task 1: Implement a function that calculates total sales


// Example Problem:
const sales = [
    { item: "T-shirt", amount: 20 },
    { item: "Jeans", amount: 50 },
    { item: "Dress", amount: 30 }
];
const totalSales = calculateTotalSales(sales);
console.log("Total Sales:", totalSales);

// Task 2: Implement a function to filter out discounted items


// Example Problem:
const items = [
    { name: "Shirt", price: 25, discounted: false },
    { name: "Jacket", price: 70, discounted: true },
    { name: "Pants", price: 35, discounted: false }
];
const regularPriceItems = filterDiscountedItems(items);
console.log("Regular Price Items:", regularPriceItems);

// Task 3: Define a class for Clothing Items


// Example Problem:
const item = new ClothingItem("Dress", "Dresses", 45);
console.log("Clothing Item:", item);

// Task 4: Extend the ClothingItem class for Sale Items


// Example Problem:
const saleItem = new SaleItem("Jeans", "Bottoms", 60, 20);
console.log("Sale Item:", saleItem);

// Task 5: Create a custom constructor function for Clothing Stores


// Example Problem:
const store = ClothingStore("Fashion Boutique", "Main Street");
console.log("Clothing Store:", store);

// Task 6: Implement a class with default parameters for Clothing Brands


// Example Problem:
const brand = new ClothingBrand();
console.log("Clothing Brand:", brand);
