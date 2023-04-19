const iphone = {
    name: "Iphone",
    category: "electronics",
    price: 10000,
    rating: 4.8,
    display: () => {
        console.log(this);
    }
}

const macbook = {
    name: "macbook",
    category: "electronics",
    price: 10000,
    rating: 4.8,
    display: function () {
        console.log(this);
    }
}

macbook.display();
iphone.display();