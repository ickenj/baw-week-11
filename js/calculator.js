// create helper function
var $ = function (id) {
		return document.getElementById(id);
}

// get user input
var listPrice = $('list_price').valueAsNumber;

var customerType = $('type').value;

function calculate() {
	// get input from user
	var listPrice =
		$('list_price').valueAsNumber;

	var customerType =
		$('type').value;
}

// calculate discount percent function
var discountPercent = discPercCalc(listPrice, customerType);
// set output in currency format 
$('discount_percent').valueAsNumber = discountPercent;

// calculate discount amount function
var discount = discAmountCalc(listPrice, discountPercent);
discount = '$' +discount.toFixed(2);
$('discount').value = discount;

// calculate discount price function
var discountPrice = discPriceCalc(listPrice, discount);
discountPrice = '$'+discountPrice,toFixed(2);
$('discount_price').value = discountPrice;

function discAmountCalc (listPrice, discountPercent) {
        // Calculate discount amount 
        var $discAmountCalc = listPrice * discountPercent * .01; {
        return discAmount;
}

function discPriceCalc (listPrice, discount) {
	// Calculate discount price
	var discPrice = listPrice - discount;
	return discPrice;
}

function discPercCalc (listPrice, customerType) {
        // Calculate discount percent
        if (customerType === "R") {
	        if (listPrice < 100) {
	                discountPercent = 0;
	        } else if (listPrice >= 100 && listPrice < 250) {
	                discountPercent = 10;
			} else if (listPrice >= 250) {
	                discountPercent = 25;
			}
        } else if (customerType === "C") {
	        if (listPrice < 250) {
	              discountPercent = 20;
	        } else {
	              discountPercent = 30;
	        }
        }       
        discountPercent = parseFloat(discountPercent);
	return discountPercent;
}

function getToday () {

	// Create new date
	var currentDate = new Date();
	
	// Get current month, day, year values
	var month = currentDate.getMonth() +1;
	var day = currentDate.getDate();
	var year = currentDate.getFullYear();

	// Set date formats
	month = (month < 10) ? "0" + month : month;
	day = (day < 10) ? "0" + day : day;
	
	// Return date output
	var dateString = "Today is " + month + "/" + day + "/" + year;
	document.writeln(dateString);

}


