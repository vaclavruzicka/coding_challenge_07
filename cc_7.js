//Task 1 - Function Declaration

function calculateInvoice(subtotal, taxRate, discount){ //Writing a function that calculates an invoice given a subtotal, a tax rate, and a discount.
    return (subtotal + (subtotal * taxRate)) - discount
}

//Logging the function with test data using a template literal.
//Using .tofixed(2) in order to display two decemial points for the invoice total.
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`) //Exepcted Output: Total Invoice: $103.00
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`) //Expected Output: Total Invoice: $530.00
