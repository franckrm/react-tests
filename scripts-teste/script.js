class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        this.price = this.price * ((100-discount)/100)
    }
}

class ProductWithAttributes extends Product{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são");
        this.colors.forEach((color)=>{
            console.log(color)
        })
    }
}


const shirt = new ProductWithAttributes('Camisa gola v',10,["Preto", "Azul", "Verde"])
shirt.productWithDiscount(50)
console.log(shirt.price)
shirt.showColors();