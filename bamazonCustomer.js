var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  
  port: 3306,

  
  user: "root",

  
  password: "password",
  database: "bamazon"
});


connection.connect(function(err) {
  if (err) throw err;
 
  start();
});

function start() {
    connection.query(
        `SELECT item_id, product_name, price FROM bamazon.products;`,
      function(err, res) {
        if (err) throw err;
            console.table(res);
      }
    );
    //inquirer
    //.prompt([
    //    {}
    //  ])
    //  .then(function(answer) {
//
    //    connection.query(
    //      function(err, result) {
    //        if (err) throw err;
    //        console.log(result);
    //      }
    //    );
    //  });
      
}

