const iphone = {
    name: "iphone",
    price: 100000,
    rating: 4.8,
    display: () => {
        
        let iphoneRed = {
            name: "Iphone red",
            price: 110000,
            print: () => {
                console.log(this);
            }
        }
        iphoneRed.print();

    }
}

iphone.display();