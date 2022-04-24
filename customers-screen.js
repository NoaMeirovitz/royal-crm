const c = require("./customers");
const p = require("./products");
const o = require("./orders");

c.addCustomer();
c.customersList();

p.productsList();
p.addProduct();

o.addOrder();
o.addOrder();
