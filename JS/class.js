class Notebook {
  constructor(name, price, company) {
    this.name = name;
    this.price = price;
    this.company = company;
  }
}

const notebook = new Notebook("MacBook", 2000000, "Apple");

console.log(notebook); // Notebook { name: 'Macbook', price: 2000000, company: 'Apple' }
console.log(notebook.name); // MacBook
console.log(notebook.price); // 2000000
console.log(notebook.company); // Apple

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  printInfo() {
    console.log(`상품명: ${this.name}, 가격: ${this.price}`);
  }
}
const notebook2 = new Product("Apple Mackbook", 2000000);
notebook2.printInfo();

const computer = {
  name: "Apple Mackbook",
  price: 2000000,
  printInfo: function () {
    console.log(`상품명: ${this.name}, 가격: ${this.price}`);
  },
};
computer.printInfo();

class Cloth {
  constructor(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
  }
  printInfo() {
    console.log(
      `색깔: ${this.color}, 사이즈: ${this.size}, 가격: ${this.price}`
    );
  }
}
const coat = new Cloth("black", "M", 100000);
coat.printInfo();
