'use strict';
 function customer(	CustomerID,CompanyName,ContactName,ContactTitle,address,city){
     this.CustomerID = CustomerID
     this.CompanyName = CompanyName
     this.ContactName = ContactName
     this.ContactTitle = ContactTitle
     this.address = address
     this.city = city
 }
 function order(OrderID,CustomerID,EmployeeID,OrderDate,RequiredDate){
     this.OrderID = OrderID;
     this.CustomerID = CustomerID;
     this.EmployeeID = EmployeeID;
     this.OrderDate = OrderDate;
     this.RequiredDate = RequiredDate;
 }
 