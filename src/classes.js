class Personel{
    constructor(ad, soyad){
        this.ad = ad
        this.soyad = soyad
    }
    kaydet(){
        console.log('Personel kaydedildi: ' + this.ad + " " + this.soyad)
    }
}

const personel = new Personel("Sabri", "Dindar")
personel.kaydet()


