// Arrayler 
// Yeni array oluşturmak için;
let newArray = new Array()
console.log(newArray)

let newArray3 = Array()
console.log(newArray3)

// Genelde en çok kullanılan boş array oluşturma methodu
let newArray2 = []
console.log(newArray2)

let meyveler = ["Elma","Armut","Kivi","MUZ"]
let sayilar = [1,2,3,4,5,6,7]

console.log("Meyveler:",meyveler,"ve bu array'in uzunluğu:",meyveler.length) // Array uzunluğu direkt eleman sayısı kadar olur 0.İndex alınmaz

let strName = "Yunus"
let arrayName = strName.split('') // stringi harf harf bölüp elemanına erişiyoruz.
console.log(arrayName)
arrayName[0] = "B" // İlgili veriye erişmek için yine 0.İndexi kullanıyoruz.
console.log(arrayName)

// Array içeriği değiştirilebiliyor. const ile oluştursak bile.

//dizinin son elemanına ulaşmak için

meyveler[meyveler.length-1] = "Ananas"
console.log(meyveler)

// Array Manipüle etmek
//Array oluşturmak için array class ı oluşturabiliyoruz
let manArray = Array(8) // parantez içine kaç elemanlı bir array oluşturacağımızı seçiyoruz 
// Bir veri çağırırken array içine değer verirsek yüklenene kadar ... gözükür. Böylelikle veri çekerken oluşan zamanı ... ile yükleniyor şeklinde ifade edebiliriz.

console.log(manArray)

//Array'i statik değişmeyen bir elemanla doldurmak için
// Array(4).fill("A")
let arrayStatic = Array(5).fill("X") // array'İn içine 5 adet x yerleştirir ve değişmez
console.log(arrayStatic)

//İki array'i birleştirmek için
//concatenate
let array6 = [1,2,3]
let array7 = [4,5,6]
let array8 = [7,8,9]
let result = array6.concat(array7,array8) // birden çok diziyi tek satırda birleştirebiliriz

console.log(result)

//Array'in elemanına ulaşmak için.indexOf()
console.log(result.indexOf(4)) // parantez içine yazdığımız eleman array de var mı ona bakar varsa indexini yoksa -1 basar
console.log(meyveler.indexOf("MUZ"))

// Son indexi almak istediğimizde lastIndexof() 
let asd = [1,2,3,3,3,4,1]
console.log(asd.lastIndexOf(1)) // geçtiği en son yere bakar
console.log(asd.includes(1)) // ilgili array parantez içindeki sayıyı içeriyorsa true içermiyorsa false basar.

// Checking array // ilgili değişken bir array mi kontrol etmek için;

console.log(Array.isArray(asd)) // true false olarak çıktı alır
let numName = "Two"
numName = numName.split('')
console.log(numName)
console.log(Array.isArray(numName))

//Array'i String'e çevirmek

let numOfElements = [1,2,3,4,5]
numOfElements = numOfElements.toString()
console.log(numOfElements)

// Her elemanı verdiğimiz bir birleştirme itemine göre birleştirip stringe çevirir
let numJoin = [1,2,3,4,5]
numJoin = numJoin.join("/") // ilgili array'i verdiğimiz bölme methoduna göre böler : 1/2/3/4/5 default:,
console.log(numJoin)

//Slice belli bir aralıkta birkaç değeri kesmek için kullanılır

let numSlice = [1,2,3,4,5,6]
console.log(numSlice.slice(0,3)) // 1,2,3 arrayini verir

// Splice Method başlangıç/ silineceklerin sayısı/ eklenenlerin içerikler
//Seçilen elemanları secer ve diğer elemanları sielr  istersek belirtilen yeni elemanları ekler
const numberSplice = [1,2,3,4,5]
console.log(numberSplice.splice(0,2)) //1 ve 2 dışında diğer elemanları siler
console.log(numberSplice.splice()) // tüm elemanları siler
// seçilen elemanı seçer diğerlerini siler
let numsSplice = [1,2,3,4,5,6,7,8]
console.log(numsSplice.splice(0,4, 5,5,5)) //1,2,3,4 ü seçer // direkt olarak ilgili array e console.log ile müdahale edebiliriz.
console.log(numsSplice)

let nameSplice = ["Yunus","Ediz","Arslan","Deneme"]
let güncelisimler = nameSplice.splice(0,3, 'Ahmet', 'Mehmet', 'Davut') //Güncelisimler arrayine çıkarmayı seçtiğimiz değerler girer
// ana arrayimize ise yeni eklediğimiz değerler girer
console.log(güncelisimler)
console.log(nameSplice)

//Diziye veri eklemek .push
//eklenen veri sona girer

nameSplice.push("Kaan") // dizinin sonuna kaan'I ekler ekler
console.log(nameSplice)

// .pop sondaki veriyi siler
nameSplice.pop() //silinecek değeri direkt silmek için
console.log(nameSplice)

// sildiğimiz değerleri bir değişkene atabiliriz.

let deletedItems = nameSplice.pop() // ana diziden siler ve yeni bir değişkene atar
console.log(deletedItems)

//Baştan veriyi çıkarmak için 
let numShift = [1,2,3,4,5]
numShift.shift() // ilk elemanı siler
console.log(numShift)

//Push ile dizinin sonuna eleman ekliyorduk unshift ile de dizinin başına eleman ekleriz
numShift.unshift("12")
console.log(numShift)
//
//Dizi elemanlarını tersine çevirmek
let reversedNums = [1,2,3,4]
console.log(reversedNums.reverse())

let nameReversed = "Yunus"
console.log(nameReversed.split('').reverse().join('')) // split ile harflerine bölüp dizi haline çevirdi. Reverse ide diziyi tersine döndürdü. join ile diziyi bölen elemanları kaldırdı

//Ascending a dan z ye diziyi sıralamak
// .sort()

let progLang = ["HTML","CSS","JAVA","JAVASCRİPT"]
console.log(progLang.sort()) // a dan z ye sıralı

let numsaw = [8,1,2,7,4,3,6,5]
console.log(numsaw.sort()) // dağınık sayı dizileri de sıralanabilir

// array içinde farklı tipteki veriler bulundurabiliriz
let arrayW = [1,2,"YUnus",[1,2,3],{},null,undefined]
//dizi içindeki array'in içindeki bir elemanı çağırmak için 
console.log(arrayW[3][1]) 



// seçilen array item ı silmek
let allergtToHoney = 1 
if(allergtToHoney == 1){

    let indexOfHoney =   shopping.indexOf("Honey")
  
    delete shopping [indexOfHoney] // seçilen 
      console.log(shopping)
  }

  