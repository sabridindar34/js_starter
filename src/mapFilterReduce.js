let cart = [
    {id: 1, productName: "Telefon", quantity: 4, unitPrice: 4000},
    {id: 2, productName: "Bardak", quantity: 5, unitPrice: 45},
    {id: 3, productName: "Bilgisayar", quantity: 2, unitPrice: 8000},
    {id: 4, productName: "Kalem", quantity: 5, unitPrice: 25},
    {id: 5, productName: "Masa", quantity: 3, unitPrice: 350}
]

cart.map(product =>{
    console.log(product.productName + ": " + (product.quantity * product.unitPrice) + " TL")
})

let quantityOver2 = cart.filter(product => product.quantity>2)
console.log(quantityOver2)

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log("Toplam Tutar: " + total + " TL.")




// REFERENCE TYPE
function addToCart(cart){
    cart.push({id: 6, productName: "Televizyon", quantity: 10, unitPrice: 12000})
}
addToCart(cart)
// console.log(cart);



// VALUE TYPE
let sayi = 20
function plusOne(num) {
    num+=1
    console.log(num);
}
// plusOne(sayi)
// console.log(sayi);


