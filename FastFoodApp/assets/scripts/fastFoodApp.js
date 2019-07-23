function buttonPress(){
    return document.getElementById("sendOrder").addEventListener("click", newOrder());
}


function newOrder() {
    var order = document.getElementById("orderBox").value;
    alert("You ordered:" + order);
}


const inventory  = {
    grass: 20,
    kale: 20,
    fries: 23,
    spinach: 16,
};

var personsOrder = "grass, kale";
var orderArray = personsOrder.split(",").map(menuItem => menuItem.trim());


console.log(orderArray);

