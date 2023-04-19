function Product(n, p, d) {
    name = n;
    this.price = p;
    this.description = d;

    this.display = function () {
        console.log(name, this.price);
    }
}
const p = new Product("bag", 100, "cool new bag");
p.display();