//Task 1 - Function Declaration

function calculateInvoice(subtotal, taxRate, discount){ //Writing a function that calculates an invoice given a subtotal, a tax rate, and a discount.
    return (subtotal + (subtotal * taxRate)) - discount
}

//Logging the function with test data using a template literal.
//Using .tofixed(2) in order to display two decemial points for the invoice total.
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`) //Exepcted Output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`) //Expected Output: "Total Invoice: $530.00"

//Task 2 - Function Expression

function calculateHourlyWage(salary, hoursPerWeek){ //Writing a function that calculates hourly wage when given a salary and how many hours are worked per week.
    return salary / (hoursPerWeek * 52) //Using 52 to represent how many weeks there are in a year.
}

//Logging the function with test data using a template literal.
//Using .tofixed(2) in order to round and display two decemial points for the hourly wage.
console.log(`Hourly Wage: $${calculateHourlyWage(52000,40).toFixed(2)}`) //Expected Output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000,35).toFixed(2)}`) //Expected Output: "Hourly Wage: $41.21"