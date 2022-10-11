const Product = function () {}

Product.prototype.getInfo = function(){
  return `
	Name: ${this.name}.
	Category: ${this.category}.
	Type: ${this.type}.
	Price: $${this.price}.
`
};

const HomeProduct = function(){
}
HomeProduct.prototype = Object.create(Product.prototype);
HomeProduct.prototype.category = 'Товары для дома';
HomeProduct.prototype.constructor = HomeProduct;

const Dishes = function(name,price){
	this.name = name
	this.price = price
}

Dishes.prototype = Object.create(HomeProduct.prototype);
Dishes.prototype.type = "Посуда"
Dishes.prototype.constructor = Dishes;

let pan = new Dishes("Сковорода", 10);

const Furniture = function(name,price){
	this.name = name
	this.price = price
}

Furniture.prototype = Object.create(HomeProduct.prototype);
Furniture.prototype.type = "Мебель";
Furniture.prototype.constructor = Furniture;

let table = new Furniture("Стол", 100);

console.log(table.getInfo());
console.log(pan.getInfo());