//Stringler
// "" '' veya `` kullanılarak string olusturulabilir

let name = "Yunus"
let surName = "Edizarslan"
let space = " " // space i hep değişken olarak vermek zorunda değiliz " " ile de space tanımlayabiliriz.

let fullName = name+space +surName
console.log(fullName)

// + ile birleştirme eski ve hataya açık bir metod
// Bir string ile int değişkeni birleştirir toplamaz
let age = 15
let comment = "Ürün hatalı ve ürün kodu: "
let withCodeComment = comment + age + 14
console.log(withCodeComment)
// uzun paragrafları ters slash ile paragrafa satır atlatabilirsin

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

// console.log(paragraph)

// javascript satır kodları
// \n satır atlama
let names = "Yunus\n Ediz \n Arslan"
console.log(names)
// \t tab karakteri ( 8 tane boşluk basar)
// \\ back slash ile  tek \ kullanmak için basarız
const pass = "pass\\"
console.log(pass)

//Eğer String obje içerisinde tırnak kullanmak istersek; tek tırnak açtığımız nesne de çift tırnak ile kullanım yapabiliriz
console.log("Yunus'un odası")
console.log('Yunus"un odası')
// Ama istersek bu komutları  string içerisinde kullanabiliriz.\" ile " \' ile ' 
// Örnek kodlar
console.log("Bu kurs 1.Gün ile başladı ve Devam ediyor \n 2.Dersleri ise yarın devam edecek")
console.log("Çok yakında\t her şey \t daha güzel\t olacak\t")
console.log("Şifresinde özel karakterlerden\\ bulunuyor")
console.log("Yunus\"un")
console.log("Ahmet\'in ")

//Template String Güncel birleştirme metodu
//Stringleri birleştirirken bu yapıyı kullanabiliriz 
// Backtick karakteri genelde klavyelerin alt+,(virgül) kombinasyonu ile çağırılır

let name1 = "Yunus"
let surname2 = "Edizarslan"
let fullName2 = `${name1} ${surname2}` //backtick arasına yazdığın tüm değerleri alır boşluk vs ekstra ifadeler vs her şey alınır

let customerID = 25
let orderNumber = 123341
let customerName = "Yunus Ediz"

let customerData = `Customer name is: ${customerName} and the id number is: ${customerID} and the order number is: ${orderNumber}
please ship the customer product ! 
` // backtick içine yazılan her şey veri içinde algılanır. boşluk kullanımında veya satır atlama durumunda çıktıya yansır
// içerisinde javascript ifadesi kullanılacaksa ${değişken}.şeklinde kullanılır
console.log(customerData)

console.log(fullName2)

let a = 5
let b = 4

let ttal = ` 
The total of these numbers  ${a} and ${b} is : ${a+b}

`
console.log(ttal)

fullName = name1+ fullName

console.log(`${fullName}`)

let a1 = 1
let b1 = 2 
console.log(`${a1} is lower than ${b1} : ${a1<b1}`)

// Javascipt'teki her şey bir objedir Stringler primitivedir
//string lengt uzunluğunu almak için boşluk dahil

let datas = "Yunus"
console.log(datas.length)
// Stringleri indexleyecek istediğimiz karakterine erişebiliriz.
//İndex 0 dan başlar.
console.log(datas[2])
// Son index e erişmek için ilk önce length -1 yapıp sonra bir değişkende  lastIndex i kullanıp son değeri alabiliriz.
lastIndex = datas.length - 1 // ilk önce kaçıncı indexte olduğunu bulduk daha sonra da o index i çağırdık
console.log(datas[lastIndex])
// Harfleri büyük veya küçük harfe çevirme .toUpperCase() toLowerCase() yapılarını kullanıyoruz.
let namesToUpper = "Yunus Edizarslan"
console.log(namesToUpper.toLowerCase())
console.log(namesToUpper.toUpperCase())

console.log("-----------------------------------")

// String ifadeleri bölmek için substr() i kullanıyoruz

let youtube = "Youtube"
console.log(youtube.substr(0,youtube.length-1))
console.log(youtube.substr(0,2))

//Substring() ile de aynı bölme işlemi yapılıyor ama verdiğimiz son indexteki veriyi almıyor. baştaki değeri alıyor

let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

//Split bölme belirtilen stringi böler ve array e çevirir.

let yunusName = "Yunus Ediz Arslan"
console.log(yunusName.split(' ')) // boşlupa göre ayırır
console.log(yunusName.split('')) // harflere göre basar.

//trim başında ve sonundaki boşlukları kaldırır

let deneme = "  Yunus Ediz Arslan  "
console.log(deneme.trim())
// BU DEĞERİ İÇERİYORSA TRUE VEYA FALSE BASAR. içindeki değerin büyüklüğü küçüklüğü sonucu etkiler
console.log(deneme.includes("Y"))
console.log(deneme.includes("Ahmet"))

let str = "Merhaba Yunus" // replace seçilen değeri ilgili değer ile değiştirir. tüm değerleri yeni değer ile değiştirmek için ise str.replaceAll().
console.log(str.replace("Yunus", "Ahmet"))
// index numarasını [] böyle çağırmaktansa .charAt() ile çağırabiliriz
//! unutma strinler primitive veri tipidir.

let jsCode = "30 Days of Js 30"
console.log(jsCode.charAt(0))

// .indexOf("D") DERSEK İLGİLİ DEĞER KAÇINCI İNDEXTE ONU ÖĞRENİRİZ EĞER YOKSA -1 DÖNER
// .lastIndexOf("D") ise ilgili değer en son kaçıncı indexte kullanılmış onu basıyor.
console.log(jsCode.indexOf("J"))
console.log(jsCode.indexOf("E"))
console.log(jsCode.lastIndexOf("30"))

// Eğer ifade belirtilen ifade ile başlıyorsa true or false basar.
let stringsss = 'Love is the best to in this world'
console.log(stringsss.startsWith("love")) // false basar çünkü büyük love ile başlıyor
console.log(stringsss.startsWith("Love")) // True

//endsWith de verilen değer ile bitiyormu ona bakar
console.log(stringsss.endsWith("AS"))
console.log(stringsss.endsWith("world"))

console.log(stringsss.search("L")) // ilk eşleştiği indexi basar.

// MATCH 
// REGEX Önemli
let stringA = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(stringA.match('love'))
//Bütün texti arıyor ve  hangi indexte ve tam stringi veriyor.

console.log(stringA.match(/love/g)) // kaç kere kullanılmış
console.log(stringA.match(/love/gi)) // Global olarak kullanılıyor.

stringA.repeat(10) // 10 kere aynı veriyi tekrar eder.

// .typeof(x) hangi veritipi

//Changing data type  
//Casting Bir veri türünü başka bir veri türüne çevirme
//String to int string veri tipini int e çevirme

//String tipi sayıları int e çeviriyor.
//ParseInt
let testConvert = "5" 
console.log(parseInt(testConvert))
//bir number stringi int e çevirmek için başına +koy
let sayiCon = "6"
console.log(+sayiCon)
// Eğer Number(x) gibi number command ini kullanırsak da sayıyı çevirebiliriz.
console.log(Number(sayiCon))

// Aynı kullanımları float tipi sayılar içinde yapabiliryoruz
let floatNumber = "3.14"
console.log(parseFloat(floatNumber))









