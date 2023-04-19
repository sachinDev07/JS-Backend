class Product {
    #name; // private
    #price;
    // description;

    constructor(n, p, d) {
        this.#name = n;
        this.#price = p;
        this.description = d;
        // return "10"; // primitive -> no effect
        // return {x: 10};
        //return this; // if you dont return anything, it is equal to saying return this;
    }

    set name(n) {
        if(typeof(n) != 'string') {
            console.log("invalid name passed");
            return;
        }
        this.#name = n;
    }

    setPrice(p) {
        if(p < 0) return;
        this.#price = p;
    }

    get name() {
        return this.#name;
    }

    display() {
        // print the product
        console.log(this.#name, this.#price, this.description);
    }
}

const p = new Product("Bag", 100, "a cool bag");
p.name = "Iphone";
console.log(p);
// console.log(p.name);