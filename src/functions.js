function selam(){
    console.log("merhaba");
}
selam()

const selamFonsiyonu=function selam() {
    console.log("selam ")
}
selamFonsiyonu()

const selamFonsiyonu1=function() {
    console.log("selam 1")
}
selamFonsiyonu1()


const selamFonksiyonu2 = () => {
    console.log("selam 2");
}
selamFonksiyonu2()

const selamFonksiyonu3=(mesaj) => console.log(mesaj)
selamFonksiyonu3("selam 3")

let topla=(sayi1,sayi2) => sayi1+sayi2
let toplam=topla(43,435)
console.log(toplam);



function add(sayi1, sayi2){
    return sayi1+sayi2
}
function add(sayi1, sayi2, sayi3){
    return sayi1+sayi2+sayi3
}
function add(sayi1, sayi2, sayi3,  sayi4){
    return sayi1+sayi2+sayi3+sayi4
}

function add(...sayilar){
    let toplam=0
    for (let i = 0; i < sayilar.length; i++) {
        toplam += sayilar[i];
    }
    console.log(toplam);
}
add(343,3,43,423,344,3,3443,2,34)


console.log(Math.max(23,2,323,4,43,56,67,776,45,544,436,634,364,543))

let numbers=[23,32,432,234,342,213,435,56,345,56,454,435]

console.log(Math.min(...numbers));



let regions=["İç Anadolu", "Marmara", "Akdeniz"]

// console.log(regions[0]);
// console.log(regions[1]);
// console.log(regions[2]);

//************************************************************************************//
const [icAnadolu, marmara, akdeniz, [icAnadoluSehirleri, marmaraSehirleri, akdenizSehirleri]] = [
    {name: "İç Anadolu", population: "23M"},
    {name: "Marmara", population: "35M"},
    {name: "Akdeniz", population: "19M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Antalya", "Adana"]
    ]
]
console.log(icAnadolu)
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
//************************************************************************************//

let {productName, quantity, unitPrice} = {productName: "elma", quantity: 34, unitPrice: 23}
console.log(productName);
console.log(quantity);
console.log(unitPrice);