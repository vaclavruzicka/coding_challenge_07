//Task 1 - Function Declaration

function calculateInvoice(subtotal, taxRate, discount){ //Writing a function that calculates an invoice given a subtotal, a tax rate, and a discount.
    return (subtotal + (subtotal * taxRate)) - discount
}

//Logging the function with test data using a template literal.
//Using .toFixed(2) in order to display two decemial points for the invoice total.
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`) //Exepcted Output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`) //Expected Output: "Total Invoice: $530.00"

//Task 2 - Function Expression

function calculateHourlyWage(salary, hoursPerWeek){ //Writing a function that calculates hourly wage when given a salary and how many hours are worked per week.
    return salary / (hoursPerWeek * 52) //Using 52 to represent how many weeks there are in a year.
}

//Logging the function with test data using a template literal.
//Using .toFixed(2) in order to round and display two decemial points for the hourly wage.
console.log(`Hourly Wage: $${calculateHourlyWage(52000,40).toFixed(2)}`) //Expected Output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000,35).toFixed(2)}`) //Expected Output: "Hourly Wage: $41.21"

//Task 3 - Customer Loyalty Discount

const calculateLoyaltyDiscount = (amount, years) => { //Writing a function that calcuates a total after a discount given the amount of the purchase and how many years the person has been a loyalty memeber.
    if (years >= 5) {
        discount = 0.15 //Using an if statement to make the discount 15% if they have been a member for 5 or more years.
                        //If the years are not greater then or equal to five, the function then moes onto the next if else statement in order to determine the discount.
    } else {
        
        if (years <3) {
            discount = 0.05 //Using an if statement to make the discount 5% if they have been  a member for 2 years or less.
        } else {
            discount = 0.10 //Using an the else part of the if else statement to make the discount 10% because if the year is not below 3, equal to 5, or above 5, it must be 3 or 4
        }
    }
    //Using an if statement to make the discount 5% if they have been  a member for 2 years or less.
    return amount - (amount * discount) //Applying the discount to the total.
}

//Logging the function with test data using a template literal.
//Used .toFixed(2) to round the totals to 2 decimal points.
console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`) //Expected Output: "Discounted Price: $85.00"
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`) //Expected Output: "Discounted Price: $190.00"

//Task 4 - Parameters and Arguments

//Wrtiting a function that calcualtes a packages shipping cost given a weight, location, and whether it was expedited.
function calculateShippingCost(weight, location, expedited = false){
    let cost = 0
    if (location === "USA") {
       cost = 5 + (0.5 * weight) //If the location is in the USA, then the base cost is 5 dollars and is 50 cents per lb.
    } else {
       cost = 10 + (0.7 * weight)//If the location is in Canada, then the base cost is 7 dollars and is 70 cents per lb.
    }
    if (expedited === true) {
        cost += 10 //Adding a ten dollar surcharge if the package is expedited.
    }
    return cost
}

//Logging the function with provided data using a template literal.
//Using .toFixed(2) to round the totals to 2 decimal points.
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`)
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`)
