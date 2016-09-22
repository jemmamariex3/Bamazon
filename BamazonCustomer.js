var mySql = require('mysql');
var displayProducts;

var inquirer = require('inquirer');

var connection = mySql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Jt1234",
	database: "Bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    showProducts();
})

var showProducts = function() {
	connection.query('SELECT * FROM Products', function(err, data) {
		displayProducts = data.length;
		for (var i = 0; i < displayProducts; i++) {
			console.log("");
			console.log("Item Id: " +data[i].ItemID);
			console.log("Product: " +data[i].ProductName);
			console.log("Price: " +data[i].Price);
		}
		console.log(" ");
		askUser();
	});
}

var askUser = function(){
	inquirer.prompt([
	{
		type: "input",
		message: "What is the Item ID of the Product you wish to purchase?",
		name: "ItemNum"
	},
	{
		type: "input",
		message: "How many would you like to buy?",
		name: "numProducts"
	}
]).then(function (answer) {
	connection.query("SELECT * FROM Products WHERE ItemID = ?", answer.ItemNum, function(err, data) {
            if (parseInt(data[0].StockQuantity) < parseInt(answer.numProducts)) {
            	console.log("Insufficient quantity!");
            	inquirer.prompt([
					{
						type: "confirm",
						message: "Would you like to go back to menu?",
						name: "confirm",
						default: false
					}
					]).then(function(answer){
							if(answer.confirm === false){
								return;
							}
							else{
								showProducts();
							}
						});
            } else {
            	connection.query("UPDATE Products SET ? WHERE ?", 
            	[{
            		StockQuantity: parseInt(data[0].StockQuantity) - parseInt(answer.numProducts)
		        },
		        {
		        	ItemID: answer.productID
		        }], function(err, resp) {
		            console.log("Thank you for purchasing from Bamazon! You have spent $" +data[0].Price*answer.numProducts+ ". Please come again!");
					inquirer.prompt([
					{
						type: "confirm",
						message: "Would you like to go back to menu?",
						name: "confirm",
						default: false
					}
					]).then(function(answer){
							if(answer.confirm === false){
								return;
							}
							else{
								showProducts();
							}
						});
		        });
            }
        });
	
	});
}