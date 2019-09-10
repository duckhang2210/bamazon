var mysql = require("mysql");
var inquirer = require("inquirer");
var cartUpdated = {
  products: [],
  total : 0
};


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
            cartUpdated.products = [];
            cartUpdated.total = 0;
            console.table(res);
            purchase();
      }
    )
          
}

function purchase() {

  inquirer.prompt([{

          type: "input",
          name: "inputId",
          message: "Please enter the ID number of the item you would like to purchase.",
      },
      {
          type: "input",
          name: "inputNumber",
          message: "How many units of this item would you like to purchase?",

      }
  ]).then(function(userPurchase) {

      //connect to database to find stock_quantity in database. If user quantity input is greater than stock, decline purchase.

      connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function(err, res) {
          for (var i = 0; i < res.length; i++) {

              if (userPurchase.inputNumber > res[i].stock_quantity) {

                  console.log("===================================================");
                  console.log("Sorry! Not enough in stock. Please try again later.");
                  console.log("===================================================");
                  purchase();

              } else {
                  //list item information for user for confirm prompt
                  console.log("===================================");
                  console.log("Awesome! We can fulfill your order.");
                  console.log("===================================");
                  console.log("You've selected:");
                  console.log("----------------");
                  console.log("Item: " + res[i].product_name);
                  console.log("Department: " + res[i].department_name);
                  console.log("Price: " + res[i].price);
                  console.log("Quantity: " + userPurchase.inputNumber);
                  console.log("----------------");
                  console.log("Total: " + res[i].price * userPurchase.inputNumber);
                  console.log("===================================");
                  cartUpdated.products.push(res[i].product_name);
                  cartUpdated.total += (res[i].price * userPurchase.inputNumber)
                  var newStock = (res[i].stock_quantity - userPurchase.inputNumber);
                  var purchaseId = (userPurchase.inputId);
                  //console.log(newStock);
                  confirmPrompt(newStock, purchaseId);
              }
          }
      });
  });
}


function cart() {
  console.log("You've selected:");
  console.log("----------------");
  console.log("Item: " + cartUpdated.products);
  console.log("Total: " + cartUpdated.total);
  console.log("===================================");
}

function confirmPrompt(newStock, purchaseId){
  inquirer.prompt([
    {
      name: "checkout",
      type: "list",
      message: "Would you like to checkout or continue shopping?",
      choices: ['Checkout','Keep Shopping']
    }
  ]).then(function(answer){
      if (answer.checkout === 'Checkout'){
        console.log(cart());
  inquirer.prompt([
    {
      name: 'pay',
      type: 'confirm',
      message: 'Would you like to pay now?',
      default: true
    }
  ]).then(function(answer){
    if (answer.pay){
      console.log('thanks');
      connection.query("UPDATE products SET ? WHERE ?", [
        {
          stock_quantity: newStock
        },
        {
          item_id: purchaseId
        }
      ]);
      shopAgain();
    }else{
      confirmPrompt();
    }
  })
      } else if (answer.checkout === 'Keep Shopping'){
        purchase();
      }
  })
}

function shopAgain(){
  inquirer.prompt([
    {
      name: "shopagain",
      type: "confirm",
      message: "Would you like to shop again?",
      default: true 
    }
  ]).then(function(answer){
    if(answer.shopagain){
      start();
    } else{
      console.log("'kay, BYE!");
    }
  }) 
}