
function addToCart(quantity, productName="armut"){
    console.log(quantity + " adet " + productName + " sepete eklendi.");
}
addToCart(23,"elma")
addToCart(43)


function addToCart2(productName, quantity, unitPrice){

}
addToCart2("Muz", 34, 23)

 
let product1={productName: "Erik", quantity: 53, unitPrice:24}

function addToCart3(product){
    console.log("Ürün: " + product.productName
    + ", Adet: " + product.quantity + " Birim Fiyatı: " + product.unitPrice)
}
addToCart3(product1)

console.log(233);

function addToCart4(products) {
    console.log(products);
}

let products=[
    {productName: "Erik", quantity: 53, unitPrice:24},
    {productName: "Muz", quantity: 23, unitPrice:16},
    {productName: "Elma", quantity: 62, unitPrice:15}
]
addToCart4(products)


// REFERENCE TYPE
let product2={productName: "Erik", quantity: 53, unitPrice:24}
let product3={productName: "Erik", quantity: 53, unitPrice:24}
product2=product3
product2.productName="Armut"
// console.log(product3.productName);

// VALUE TYPE
let a=10
let b=20
a=b
b=100
// console.log(a);