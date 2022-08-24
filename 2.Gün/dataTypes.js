//Primitive - Nonprimitive

// primitive dataTypes: string,boollean,int,float,null,undefined (immutable)
//nonPrimitive dataTypes: object,function,arrays (mutable)

//primitive veri tipleri index alınarak  değiştirilemez let a=1 diyip let a=2 diyebiliriz fakat let  a="Merhaba" a[0] = "Test" diyemeyiz

//İki primitive değişken değerine göre karşılaştırılır. 

let numberOne = 3
let numberTwo = 3
console.log(numberOne==numberTwo)
//İki sayı değeri eşit olduğu için true basar

let py = "Python"
let js = "Javascript"
console.log(py==js)

console.log("__________________________________________")

// nonPrimitive Veri tipleri değiştirilebilir.
//İndex vererek seçip içindeki veriyi değiştirebiliriz.
//Array
let numberList = [1,2,3,4,5]
//numberList[0] 1 dir
//numberList[1] 2 dir

console.log(typeof(numberList))
numberList[0] = 45
console.log(numberList)

// Javascript dilinde hem primitive hemde non primitive veri tiplerini bir dizi  içerisinde tutabiliriz.
let dataList = ["yunus", 24 , null , undefined , [] ] 
console.log(dataList)

//Teknik olarak aynı olsalarda nonprimitive datalar farklıdır referansları değişken adları farklı olduğu için false basar.
let numLister = [1,2,3]
let numLister2 = [1,2,3]
console.log(numLister==numLister2)

let nameSurname = {

    names:"Yunus" ,
    surname:"Edizarslan"
}
let nameSurname2 = {

    names:"Yunus" ,
    surname:"Edizarslan"
}
console.log(nameSurname==nameSurname2)
//Objelerde içindeki nesneler aynı olsa bile karşılaştırılamaz
//Eğer biz objenin veya diğer non primitive veri türlerinin referansını bir değişkene verip karşılaştırırsak işte o zaman yapı true basar

let testData = ["TestData" , "Test Datas"]
let testData2 = testData
console.log(typeof(testData))
console.log(testData==testData2)

let objectList = {

    name:"Ahmet",
    surname:"Mehmet",
    age: 24,
    ogrencilikDurumu: false

}
let objectList2 = objectList
console.log(objectList==objectList2)

