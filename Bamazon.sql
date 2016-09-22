CREATE database Bamazon;

USE Bamazon;

CREATE TABLE Products (
  ItemID INT AUTO_INCREMENT NOT NULL,
  ProductName VARCHAR(100) NULL,
  DepartmentName VARCHAR(100) NULL,
  Price DECIMAL(10,2) NULL,
  StockQuantity INT NULL,
  PRIMARY KEY (ItemID)
);
  
SELECT * FROM Products;

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES 
(1,'Headphones','Technology',19.99,20),
(2,'Speakers','Technology',21.99,15),
(3,'External Battery','Technology',14.99,11),
(4,'Ankle Socks','Clothes',6.95,0),
(5,'Vnecks','Clothes',9.95,10),
(6,'Jeans','Clothes',24.99,7),
(7,'Mascara','Musical Instruments',5.99,20),
(8,'Eyeliner','Makeup',4.99,35),
(9,'Lipstick','Makeup',5.95,12),
(10,'Foundation','Makeup',10.95,15);