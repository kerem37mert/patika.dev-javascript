let isim = prompt("İsminizi Giriniz");

let name = document.querySelector("h1 #name");
let date = document.querySelector("#date");

let tarih = new Date();
let saat = tarih.getHours();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
let gunSayi = tarih.getDay();
let gun;

switch(gunSayi)
{
    case 1:
        gun = "Pazartesi";
        break;
    case 2:
        gun = "Salı";
        break;
    case 3:
        gun = "Çarşamba";
        break;
    case 4:
        gun = "Perşembe";
        break;
    case 5:
        gun = "Cuma";
        break;
    case 6:
        gun = "Cumartesi";
        break;
    case 7:
        gun = "Pazar";
        break;         
}

date.innerHTML = saat + ":" + dakika + ":" + saniye + " " + gun;
name.innerHTML = isim;