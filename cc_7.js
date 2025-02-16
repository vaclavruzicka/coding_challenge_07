//Task 1 - Function Declaration

function calculateInvoice(subtotal, taxRate, discount){ //Writing a function that calculates an invoice given a subtotal, a tax rate, and a discount.
    return (subtotal + (subtotal * taxRate)) - discount
};

//Logging the function with test data using a template literal.
//Using .toFixed(2) in order to display two decemial points for the invoice total.
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`); //Exepcted Output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`); //Expected Output: "Total Invoice: $530.00"

//Task 2 - Function Expression

function calculateHourlyWage(salary, hoursPerWeek){ //Writing a function that calculates hourly wage when given a salary and how many hours are worked per week.
    return salary / (hoursPerWeek * 52) //Using 52 to represent how many weeks there are in a year.
};

//Logging the function with test data using a template literal.
//Using .toFixed(2) in order to round and display two decemial points for the hourly wage.
console.log(`Hourly Wage: $${calculateHourlyWage(52000,40).toFixed(2)}`); //Expected Output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000,35).toFixed(2)}`); //Expected Output: "Hourly Wage: $41.21"

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
};

//Logging the function with test data using a template literal.
//Used .toFixed(2) to round the totals to 2 decimal points.
console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6).toFixed(2)}`); //Expected Output: "Discounted Price: $85.00"
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2).toFixed(2)}`); //Expected Output: "Discounted Price: $190.00"

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
};

//Logging the function with provided data using a template literal.
//Using .toFixed(2) to round the totals to 2 decimal points.
console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true).toFixed(2)}`); //Expected Output: "Shipping Cost: $20.00"
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false).toFixed(2)}`); //Expected Output: "Shipping Cost: $13.50"

//Task 5 - Returning Values

//Writing a function that caluclates the intrest on a loan given the principle amount, intrest rate,and the how many years for the loan.
function calculateLoanIntrest(principal, rate, years){
    intrest = principal * rate * years
    return intrest
};

//Logging the function with provided data using a template literal.
//Using .toFixed(2) to round the totals to 2 decimal points.
console.log(`Total Intrest: $${calculateLoanIntrest(1000, 0.05, 3).toFixed(2)}`); //Expected Output: "Total Intrest: $150.00"
console.log(`Total Intrest: $${calculateLoanIntrest(5000, 0.07, 5).toFixed(2)}`); //Expected Output: "Total Intrest: $1750.00"

//Task 6 - Higher Order Functions

let transactions = [500, 1200, 3000, 800, 2200]; //Declaring an array named transactions with five values.

//Writing a function that filters out any amounts that are not above 1000.
function filterHighValueTransactions(transactions , amount){
    return transactions.filter(amount => amount > 1000) //Sets the minimum amount at 1,001.
};

//Logging the array with the filter function.
console.log(filterHighValueTransactions(transactions, 1000));

//Task 7 - Clsoures

//Writing a function that creates a tracker that follow how much has been spent.
function createBudgetTracker(){
    let currentBalance = 0 //Starts the running total at 0.

    return function(expense){
        currentBalance += expense //Adds the amount input to the running total.
        return `Current Balance: -$${currentBalance}` //Returns the running a total using a template literal and puts a negative symbol in fron to show that they are expenses.
    } 
};

let budget = createBudgetTracker(); //Allowing the function to just be called 'tracker' to allow for ease of use.

console.log(budget(300)); //Expected OutPut: "Current Balance: -$300"
console.log(budget(200)); //Expected OutPut: "Current Balance: -$500"

//Task 8 - Recursion In JavaScript

//Writing a function that calculates projected revenue by increasing the value 5% per year until year 10.
function calculateGrowth(years, revenue){
    if (years >= 10) return `Projected Revenue: $${revenue.toFixed(2)}`; //Returning a template literal when year 10 has been reached.
    //Used .toFixed(2) to round to two decimal points.
    revenue *= 1.05 //Multiplies the revenue by 5% if it is not year ten.
    return calculateGrowth(years + 1, revenue); //Adds one year, and loops the multiplication until year 10 is reached.
}
console.log(calculateGrowth(8,1000)); //Expected OutPut: "Projected Revenue: $1102.50"
console.log(calculateGrowth(5,5000)); //Expected OutPut: "Projected Revenue: $6381.41"