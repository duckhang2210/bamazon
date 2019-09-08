DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2),
    stock_quantity INT
);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("pencil", "office", 1.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("blue pen", "office", 2.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("red pen", "office", 2.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("black pen", "office", 2.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("3x3 rubik's", "toy", 3.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("4x4 rubik's", "toys", 4.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("triangle rubik's", "toy", 4.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("12x12 rubik's", "toy", 7.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("masterpiece jean", "fashion", 59.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("awesome t-shirt", "fashion", 10.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("fantastic boxer pack", "fashion", 12.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("unstoppable socks pack", "fashion", 7.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("flamethrower", "anti-apocalypse", 250.59, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("eternal light bulb", "anti-apocalypse", 500.29, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("infinity water dispenser", "anti-apocalypse", 937.48, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES ("lightsaber", "anti-apocalypse", 4999.99, 1);