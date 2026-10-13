const price = args[0];
const qty =args[1];
const taxPercent = args[2];

const subtotal = price * qty;
const tax = (subtotal * taxPercent) / 100;
const total = subtotal + tax;

console.log(`Subtotal: ${subtotal}`);
console.log(`Tax: ${tax}`);
console.log(`Total: ${total}`);