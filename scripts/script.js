// Task 1: Implement a function that calculates total sales
function calculateTotalSales(sales){
    let total = 0;
    for (const sale of sales){
        total =+ sale.amount;
    }
    return total;
}

// Example Problem:
const sales = [
    { item: "T-shirt", amount: 20 },
    { item: "Jeans", amount: 50 },
    { item: "Dress", amount: 30 }
];
const totalSales = calculateTotalSales(sales);
console.log("Total Sales:", totalSales);

// Task 2: Implement a function to filter out discounted items
function filterDiscountedItems(items){
    let regularPriceItems = [];
    for(const item of items){
        if (!item.discounted){
            regularPriceItems.push(item);
         }
    }
    return regularPriceItems;
}

// Example Problem:
const items = [
    { name: "Shirt", price: 25, discounted: false },
    { name: "Jacket", price: 70, discounted: true },
    { name: "Pants", price: 35, discounted: false }
];
const regularPriceItems = filterDiscountedItems(items);
console.log("Regular Price Items:", regularPriceItems);

// Task 3: Define a class for Clothing Items
class ClothingItem{
    constructor(name, category, price){
        this.name = name;
        this.category = category;
        this.price = price;
    }

}

// Example Problem:
const item = new ClothingItem("Maxi Beach Dress", "Dresses", 45);
console.log("Clothing Item:", item);

// Task 4: Extend the ClothingItem class for Sale Items
class SaleItem extends ClothingItem{
    constructor(name, category, price, discount){
        super(name, category, price);
        this.discount = discount;
    }
}

// Example Problem:
const saleItem = new SaleItem("Jeans", "Bottoms", 60, 20);
console.log("Sale Item:", saleItem);

// Task 5: Create a custom constructor function for Clothing Stores
function ClothingStore(name, location){
    let store = {};
    store.name;
    store.location;
    return store;
}

// Example Problem:
const store = ClothingStore("Josie's Fashion Boutique", "Saint Paul");
console.log("Clothing Store:", store);

// Task 6: Implement a class with default parameters for Clothing Brands
class ClothingBrand{
    constructor(name = "Unknown Brand", price = "$"){
        this.name = name;
        this.price = price;
    }
}

// Example Problem:
const brand = new ClothingBrand();
console.log("Clothing Brand:", brand);
