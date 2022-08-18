// Number tipi veriler

let age = 24
const gravitiy = 9.81
let mass = 72
const PI = 3.14
const boilingPoint = 100
// matematik işlemi javascript'de vardır.

const pı = Math.PI
console.log(Math.PI)
console.log(pı)
//Math.round sayıyı yuvarlar
console.log(Math.round(pı))
console.log(Math.round(55.2))
//floor taban ceil tavan 
//floor float tipi sayıyı taban sayısına yani virgülden önceki sayıya döner
console.log(Math.floor(5.99)) // ne olursa olsun Aşağı yuvarlar
//ceil komutu ise sayının ondalık kısmı ne olursa olsun direkt olarak ana sayının bir büyüğüne çevirir
console.log(Math.ceil(5.01)) // ne olursa olsun yukarı yuvarlar

//Math.min sayıların içindeki en düşük sayıyı bulur max de en büyüğü bulur
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))
console.log("____________________")
//Rastgele bir sayı oluşturmak için -- 0 ile 0.99 arası basar

let rondomValues = Math.random() //0 ile 0.99 arası basar
console.log(rondomValues)

// 0 ile 10 arası sayı üretmek için bir büyük  bir büyük üssü sayı ile çarparız

const randomValues = Math.floor(Math.random()*11) // tam sayı üretmek istersek floor eklemek zorundayız istemez isek o zaman kullanmayabiliriz 
console.log(randomValues)

let testValue = Math.random()*11 // 0 ile 10 arasındaki ondalık sayıları alır
console.log(testValue)

let testv = Math.floor(Math.random()*101) // 0 ie 100 arası sayılar
console.log(testv)
let randomValues2 = Math.ceil(Math.random()*1001)  // 0 ile 1000 arası sayılar
console.log(randomValues2)

// Absolute value -- Kesin değer yani sayı - bir sayı olsa bile + değerine çevirir
console.log(Math.abs(-10))
//Sayının karekökünü almak için sqrt kullanıyoruz
console.log(Math.sqrt(10))
// Sayının üstünü almak için pow
console.log(Math.pow(3,2))










