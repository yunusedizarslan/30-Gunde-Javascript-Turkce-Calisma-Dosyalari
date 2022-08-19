//Boolleans Tipi Veriler true yada false değer tutar
let married = true
let lightOf = false
let values = 4<1
console.log(married)
console.log(lightOf)
console.log(values)

// Truthly Values (Doğru değerler)
// 0 Hariç tüm sayılar ve boş stringler dışındaki değişkenler true dur

//Falsy Values (Yanlış Değerler)
// nan null undefined 0 ve "" boş string false değer basar

// undefined değişkenler;bir değişken açıp içini boş bırakırsak karşımıza çıkar
let name 

// Null içinde değer verilmeyen
let names = null
// Assigment operators
// = eşittir x=y
// x+=y  / x = x+y
// x-=y  / x = x-y
// x*=   / x = x*y
// x/= y  / x = x/y
// x%=y   / x = x%y   Bölümünden kalan
// x**=   / x = x**y   sayının üssü

let x =5
let y =3
// Operatörler böyle kullanılır fakat her işlem sonunda x yeni bir değer aldığı için sonuç farklı olur
console.log(x*=y)
console.log(x+=y)
console.log(x-=y)
console.log(x/=y)
console.log(x%=y)
console.log(x**=y)

// Karşılaştırma Operatörleri // kondisyon doğruysa true yanlışsa false True 1 false 0
// x==y // tek eşittir atama yaparken == iki sayının birbirine eşit olup olmadığına bakar === hem değer aynı mı hem de veri tipi aynı mı
// != eşit değildir < küçüktür > büyüktür >= büyük eşittir <= küçük eşittir 

console.log(5=="5")
console.log(5==="5") //denk değiller çünkü veri tipleri farklı
console.log(5!=5) //false basar
console.log(5!=="5")

console.log("Mangos".length == "Elmas".length)

// Logical Operators 
// && ve operatoru
// || veya  iki değerden biri doğruysa true basar
// ! değer true ise false false ise true

console.log(4<3 && 4<1) //True basması için iki değerin de doğru olması gerekir.
console.log(4>3 && 4<1)
console.log(4>3 && 4>1)  //true değer

//Birden fazla koşul çağırıcaksak eğer parantez kullanıyoruz, işlem önceliği olduğu için

let q = 5
let w = 3
console.log("?____________________")
console.log((q >1 && q > 3) && q ==5 && q > 0)

console.log(1>2 || 2>1 ) //true basar çünkü iki değerden 1 i doğru
let asda = !(1>2) // false değeri true yaptı
console.log(asda)
let falses = !false
console.log(falses)


//İncreament operators 
let count = 0
console.log(++count) // ++ ile sayıyı 1 artırırız ve o satırda artırılmış olur
// let count = 0
// console.log(++count)        // 1
// console.log(count)  
//post increament ile sayının değeri yeni değer ile değişir ama ilgili satırda aynı kalır
// let count = 0
// console.log(count++)        // 0 bu satırda 0 diğer kullanımda 1
// console.log(count)          // 1


//Decremnet operator azaltma operatörleri 
// artırma operatorleri ile benzer yapı x-- --x

//Ternary tek satırlık koşullar

let isRaining = true
    isRaining
    ? console.log("Yağmur Yağacak")  // ? işareti true değer
    : console.log("Yağmur Yağmayacak") // : false değer

let newValues = 3>5 // false değer
    newValues
    ? console.log("Values is lower than 5")
    : console.log("Value is higer than 5")

let num = 5
num > 4
    ? console.log("Sayı 5 den büyük")
    : console.log("Sayi 5 den küçük veya eşit")


let  newValueTest = 10
let fiveNum = 5 
newValueTest > fiveNum  // kural veriyoruz
    ? console.log(`${newValueTest} is higer than ${fiveNum}`)
    : console.log(`${newValueTest} is lower than ${fiveNum}`)

// Operatör önceliği
// * ve / işlemi önce yapılır sonra + ve - eğer parantez içine alırsak ilk işlem önceliği parantezde
// Operatörlerde de kullanılır  console.log((q >1 && q > 3) && q ==5 && q > 0)

// Windows Alert -- Console log a benzer, tarayıcıda bir uyarı yazısı yazar ve ok butonu olur
alert("Naber Nasılsın")

// Window Prompt Metodu

// Bir prompt kutusu açar, input box kullanıcıdan input alma native metod

prompt('Bir sayı girin', ' Pozitif rakam') // İkinci değer varsayılan değerdir.

let cnum  = prompt('Please enter the customer ID')
console.log(cnum) 

// Onay kutusu  Confirm Metod tek satırlık true false şart bloğu ile confirm butonu oluşturduk
let isDelete = confirm("Emin misin ? ") // bir onay kutusu açar tamam ve iptalin olduğu tamama basarsak true iptale basarsak false
console.log(  isDelete  ? 'Silme işlemi başarılı' : 'Silme iptal edildi'
)  


let kayitOnay = confirm("Kaydetmek istediğinize emin misiniz ?") // Yanlışlıkla basıp silme gibi
   console.log(kayitOnay
    ? "Kayit Başarılı" : "Kayıt İptal edildi") 


    // Alert prompt ve confirm kullanımı örnek kod
    
alert("Değişken silme bölümüne gidiyorsunuz")
let delObject = prompt("İnput bölümüne 1 giriniz","İlgili boşluğa silip 1 değerini giriniz")
if(delObject==1){
    let numsa = confirm("Silmek istiyorsanız onaylayın")
    numsa
    ? console.log("Silme Başarılı") : ("Silme iptal edildi")
    numsa == false
    ? console.log("Silme İptal Edildi") :("Öğe Silindi")
}
    
    else{console.log("Hatalı Giriş Yaptınız")}
    
    
    