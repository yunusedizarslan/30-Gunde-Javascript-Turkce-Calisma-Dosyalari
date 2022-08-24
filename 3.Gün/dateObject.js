//Tarih objeleri Tarih ve zaman hakkında bilgi aldığımız methodlar
// Veri aldığımız için bu methodlar get ile başlar

const date = new Date() // yeni bir zaman objesi oluşturuyoruz
/*  bu obje ile tarihleri çağıracağız */

// let datess = new Date(2023,01, 00) // datess içine date in içine yazdığımız tarihi alıyor
// console.log(datess)

// .getFullYear()
// .getMonth()
// .getDate()
// .getHours()
// .getMinutes()
// .getSecond()
// .getDay() haftanın günü 0 pazar 6 ya kadar 

const now = new Date()
console.log(now.getFullYear()) // 2022
console.log(now.getMonth()) // hangi ay sayı olarak 0 -11 arası çekiyor indexler 0 dan başladığı için
console.log(now.getDate())
console.log(now.getDay()) // günlerde indexten dolayı 0 -6 arası
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds()) 




//Ayın kaç gün olduğunu bulan kod
//var ayKacCekti = new Date(2023, 08, 0).getDate();
 //console.log(ayKacCekti)

console.log("_____________")

let todays = new Date()

let day = todays.getDate()
let month = todays.getMonth()
let year = todays.getFullYear()
let hours = todays.getHours()
let minutes = todays.getMinutes()

let fulldates = `Today is: ${day}.${month}.${year}:${hours}:${minutes}`
console.log(fulldates)




const dates = new Date()
console.log(dates) // tam tarihi verir



const today = date.getMonth()
console.log(today)
