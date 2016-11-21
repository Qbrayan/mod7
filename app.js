
(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getItemsBuy();

  list1.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  // list1.removeItem = function (itemIndex) {
  //   ShoppingListCheckOffService.removeItem(itemIndex);
  // };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getItemsBought();


  // list2.removeItem = function (itemIndex) {
  //   ShoppingListCheckOffService.removeItem(itemIndex);
  // };
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsBuy = [{
    name:"soda", 
    quantity: '2 bottles'},
    {
    name:"crisps", 
    quantity: '4 packets'},
    {
    name:"biscuits", 
    quantity: '3 boxes'},
    {
    name:"sauce", 
    quantity: '6 bottles'},
    {
    name:"popcorn", 
    quantity: '3 bags'}
  ];

  var itemsBought = [];
  service.buyItem = function (itemIndex) {
      
      itemsBought.push(itemsBuy[itemIndex]);
      itemsBuy.splice(itemIndex, 1);
  };

  // service.removeItem = function (itemIndex) {
  //   items.splice(itemIndex, 1);
  // };

  service.getItemsBuy = function () {
    return itemsBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}




})();
