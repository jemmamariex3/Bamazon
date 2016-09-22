# Week12-Bamazon

In this assignment, we are to be create an Amazon-like application with MySQL The app will take in orders from the customers and deplete stock from the inventory. 

*BAMAZON DEMO VIDEO:* https://www.youtube.com/watch?v=A47-uFmklRc
##Challenge: Customer View
 
1. We are to create a database called 'Bamazon'
2. Create table inside the database called Products
3. Must have the following names for the the columns: 
	* ItemID (unique id for each product)

	* ProductName (Name of product)

	* DepartmentName 

	* Price (cost to customer)

	* StockQuantity (how much of the product is available in stores)

4. Database must have at least 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Create a Node application called `BamazonCustomer.js`. (Must be about to display all of the items available for sale. Includes the ids, names, and prices of products for sale.) 

6. App should then prompt users with two messages. 
	* ID of the product
	* How many units of the product they would like to buy.

7. Application should check if your store has enough of the product to meet the customer's request. 
	* If not, app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. If store *does* have enough: 
	* App should be updating the SQL database to reflect the remaining quantity.
	* Show the customer the total cost of their purchase.	

9. Include screenshots and/or a video showingthe app working with no bugs. These must be includes in a `README.md` file. 
