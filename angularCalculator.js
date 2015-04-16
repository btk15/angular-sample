(function () { // I learned that it is a good practice to wrap my application into a closure.

var app = angular.module("calculator", []);

app.controller("CalculatorController", function(){
	this.info = Pph;
	this.returnSavings  = function(cValue){ // this is the function called when a user presses the Curtail button
		for (var i = 0; i < Pph.length; i++) // I want to make sure there are no badPrices when function is called with a new Value
		{
			this.info[i].badPrice = false;
		}
		this.totalSavings = 0; // Savings are initialized to  every time the function is called
		for (var i = 0; i < Pph.length; i++) // iterate through the array that contains the cost of electricity for every hour
		{
			if (cValue <= Pph[i].price) // if the value of the market is higher or equal to the value entered by the customer(cValue),
			{							// then add the savings for that hour to his total savings,
				this.totalSavings += Pph[i].price;		// we also mark that hour as having bad prices for our customer, which will highlight our table in red
				this.info[i].badPrice = true;
			}
		}
		
	};		
	
});

var Pph = [ 			// (Price per hour) Array of objects that contain information about the price at every 
{	    			// hour. In addition, badPrice is initialized to false, badPrice is used for highlighting
	hour: "00:00", 		// the table.
	price: 23.75,
	badPrice: false
},
{
	hour: "01:00",
	price: 22.03,
	badPrice: false

},
{
	hour: "02:00",
	price: 21.76,
	badPrice: false

},
{
	hour: "03:00",
	price: 21.41,
	badPrice: false

},
{
	hour: "04:00",
	price: 22.17,
	badPrice: false

},
{
	hour: "05:00",
	price: 25.88,
	badPrice: false

},
{
	hour: "06:00",
	price: 45.51,
	badPrice: false

},
{
	hour: "07:00",
	price: 34.27,
	badPrice: false

},
{
	hour: "08:00",
	price: 32.31,
	badPrice: false
},
{
	hour: "09:00",
	price: 32.73,
	badPrice: false

},
{
	hour: "10:00",
	price: 33.15,
	badPrice: false

},
{
	hour: "11:00",
	price: 33.2,
	badPrice: false

},
{
	hour: "12:00",
	price: 32.43,
	badPrice: false

},
{
	hour: "13:00",
	price: 33.43,
	badPrice: false

},
{
	hour: "14:00",
	price: 34.48,
	badPrice: false

},
{
	hour: "15:00",
	price: 32.54,
	badPrice: false

},
{
	hour: "16:00",
	price: 32.68,
	badPrice: false

},
{
	hour: "17:00",
	price: 30.56,
	badPrice: false

},
{
	hour: "18:00",
	price: 28.57,
	badPrice: false

},
{
	hour: "19:00",
	price: 33.75,
	badPrice: false

},
{
	hour: "20:00",
	price: 36.49,
	badPrice: false

},
{
	hour: "21:00",
	price: 30.38,
	badPrice: false

},
{
	hour: "22:00",
	price: 26.9,
	badPrice: false

},
{
	hour: "23:00",
	price: 25.46,
	badPrice: false

},
];


})();