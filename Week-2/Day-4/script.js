//🌟 Exercise 1 : Information

function infoAboutMe() {
	console.log("My name is Zev, my age is 26")
}
infoAboutMe();

//Part II

function infoAboutPerson(personName, personAge, personFavoriteColor) {
	console.log(`Your name is ${personName}, your age is ${personAge} and your favorite color is ${personFavoriteColor}`)
}
	infoAboutPerson("David", 45, "blue")
	infoAboutPerson("Josh", 12, "yellow")

/*🌟 Exercise 2 : Tips
Instructions
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.*/

function calculateTip() {
	let bill = prompt("Please enter the amount of the bill");

	if(bill< 50){
		let finalBill20 = parseFloat(bill*0.2) + parseFloat(bill) 
		console.log(`The final bill is $ ${finalBill20}`)
	}
	else if (bill > 50 && bill < 200) {
		let finalBill15 = parseFloat(bill*0.15) + parseFloat(bill) 
		console.log(`The final bill is $ ${finalBill15}`)
	}
	else if(bill > 200){
		let finalBill10 = parseFloat(bill*0.1) + parseFloat(bill) 
		console.log(`The final bill is $ ${finalBill10}`)
	}
} 
calculateTip()

/*🌟 Exercise 3 : Find The Numbers Divisible By 23
Instructions
Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.*/
let sum = 0
function isDivisible(divisor){
	for(let i = 0; i < 500; i++){
		if( parseInt(i)%parseInt(divisor)===0)  {
		console.log(i)
		sum = sum + i

	}
	
	}
	console.log("The sum is:", sum)
}
isDivisible(23)



//🌟 Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"]

function myBill(){
	for(const item of shoppingList){

	const quantityInStock = stock[item]

	if(quantityInStock > 0){
		const price = prices[item]
		console.log('The price of',item, "is ",price)
		console.log("and we have this many in stock:", stock[item])
		stock[item] = stock[item] - 1
		console.log("The new quantity of this item in stock is:", stock[item])
	}else{
		console.log("There is no", item, "in stock")
	}
}
}
myBill()
 

//Exercise 5 : What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange) {
	const sum = calculateSum(amountOfChange)
	if(sum > itemPrice){
		console.log("you can afford it")
		return true
	}else{
		console.log("you cannot afford it")
		return false
	}
}
	
function calculateSum(arr){
	let sum = 0


	for (let i = 0; i < arr.length; i++){
		let coinValue
		const numberOfCoins = arr[i]
		if (i == 0) { coinValue = 0.25}
		if (i == 1) { coinValue = 0.10}
		if (i == 2) { coinValue = 0.05}
		if (i == 3) { coinValue = 0.01}
		console.log("We have", numberOfCoins, "coins that have a value of", coinValue)

		sum = sum + numberOfCoins * coinValue	
	}
	console.log("The total sum is", sum)

	return sum
}	
changeEnough(4.25, [25, 20, 5, 0])




//🌟 Exercise 6 : Vacations Costs



function hotelCost(numNights){
   
    
    const costPerNight = 140
    const totalPrice = Number(numNights) * costPerNight
    console.log('total price:', totalPrice)
    return totalPrice
}

function isOnlyNumbers(str){
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function includesNumbers(str){
    const regex = new RegExp(/\d/)
    return regex.test(str)
}


// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost(destination){
if (destination ==="London") return 183
if (destination ==="Paris") return 220
return 300

}



// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.


function rentalCarCost(carAnswer){

const dailyPrice = 40
const numberOfDays = Number(carAnswer)

let discount = 0
if(numberOfDays >= 10) discount = 0.05

const carTotalPrice = dailyPrice * numberOfDays * (1-discount)
console.log('cartotalPrice', carTotalPrice)
return carTotalPrice
}


// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function totalVacationCost(){
    let hotelAnswer
    let carAnswer
    let destination = ""

    while (!isOnlyNumbers(hotelAnswer)){
    hotelAnswer = prompt("How many nights will you be staying?")
}

    while (!isOnlyNumbers(carAnswer)){
    carAnswer = prompt("How many days would you like to rent the car?")
    }
    
    while (destination == "" || includesNumbers(destination)) {
    destination = prompt("Where are you going?")
    }

    const carPrice = rentalCarCost(carAnswer)
    const hotelPrice = hotelCost(hotelAnswer)
    const planePrice = planeRideCost(destination)

    console.log('carPrice:', carPrice)
    console.log('hotelPrice:', hotelPrice)
    console.log('planePrice:', planePrice)

    const totalTrip = carPrice + hotelPrice + planePrice
    console.log("Total Price of Trip:", totalTrip)
}
totalVacationCost()