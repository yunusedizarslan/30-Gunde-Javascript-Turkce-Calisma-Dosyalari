const date = new Date() // date objesi çağırılmadan metod dönmez


console.log(date)

let dt = date.getDate()
let mt = date.getMonth()
let year = date.getFullYear()

console.log(dt,".",mt,year)
console.log(`${dt}.${mt}.${year}`)


//Daha okunabilir bir tarih bölümü oluşturmak için Array içinde ay başlıklarını yazdık
// Aynı işlem günlerde de tekrar edildi
// daha sonra tüm zaman değerlerini getDate() metodu ile çağırıp backtick içinde  bastık
//farklı paketler ile de bu işlemler yapılabilir momentjs dayjs
let monthOfYears = [

    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
]

let dayOfMonth = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

const i = new Date()

let datesa = i.getDate() ,
    montha = i.getMonth(),
    yeara = i.getFullYear(),
    daya = i.getDay(),
    hoursa = i.getHours(),
    minutesa = i.getMinutes(),
    seconda = i.getSeconds()

 let fullDateOf = `${datesa} ${monthOfYears[montha]} ${yeara} ${dayOfMonth[daya]} ${hoursa}:${minutesa}:${seconda}`
 console.log(fullDateOf)

