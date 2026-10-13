let price = Number(process.argv[2]);
let qty = Number(process.argv[3]);
let tax = Number(process.argv[4]);

let subtotal = price * qty;
let TaxAmount = subtotal * (tax / 100);
let Total = subtotal + TaxAmount;
console.log("subtotal ", subtotal);
console.log("Tax", TaxAmount);
console.log('Total', Total);