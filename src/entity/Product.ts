export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;


    constructor(id, name, description, price, stock, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.image = image;

    }
}