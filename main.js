'use strict';

var DEBUG = {
    active: true
}
getCustermes().then(bulildCustermers)

function bulildCustermers(custemers) {
    custemers = JSON.parse(custemers)
    var customerContainer = document.createElement('div');

    for (let i = 0; i < Math.min(custemers.length, 5); i++) {
        var c = custemers[i];
        var models = new customer(c.CustomerID, c.CompanyName, c.ContactName, c.ContactTitle, c.address, c.city)
        var elem = document.createElement('button');
        var keys = Object.keys(models)

        for (let j = 0; j < keys.length; j++) {
            elem.innerHTML += keys[j] + ': ' + models[keys[j]] + "<br>"
        }
        elem.addEventListener("click", function () {

            getOrders().then((res) => {
                bulildOrders(res, c.CustomerID);
            })
        })
        customerContainer.appendChild(elem)
    }
    document.body.appendChild(customerContainer)
};

function bulildOrders(orders, id) {
    orders = JSON.parse(orders)
    var orderContainer = document.createElement('div');
    for (let i = 0; i < orders.length; i++) {
 
            if (orders[i].CustomerID == id) {
                var o = orders[i]
                var m = new order(o.OrderID, o.CustomerID, o.EmployeeID, o.OrderDate, o.RequiredDate)
                console.log(m)
            }
        }
    
        document.body.appendChild(orderContainer);

}
// var o = orders[i]
        // var models =new order(o.OrderID, o.CustomerID, o.EmployeeID, o.OrderDate, o.RequiredDate)
        // var keys = Object.keys(models)
        // for (let j = 0; j < keys.length; j++) {
  //     console.log( keys[j] + ': ' + models[keys[j]] + "<br>")

 // TODO cach 
    // filter