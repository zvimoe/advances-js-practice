'use strict';

var op = {
    customer:'Customers',
    order:'Orders'

}
var url = {
    api:'api.php'
}
var methud = {
    get:'GET',
    post: 'POST'
}
Object.freeze(op)
Object.freeze(url)
Object.freeze(methud)

function getCustermes(){
    return getStatment(url.api,methud.post,op.customer)
}
function getOrders(){
    return getStatment(url.api,methud.post,op.order)
}

function getStatment(url,methud,ope) {
    return new Promise(function(resolve,reject){
        
         var con = new XMLHttpRequest();
         con.open(methud, url)
         con.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         
         con.onload = function(){
             resolve(con.responseText)
         }
         con.onerror =function(res){
             reject(res)
         }
        con.send('op='+ope);

        })
}
