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
