let degisken1 = "5"
let degisken2 = 5
console.log(degisken1==degisken2) // iki sayı eşit ama biz bu metodu === ile karşılaştırırsak veri tipleri farklı olduğu için false basar.

let nms = parseInt(9.8) // 9 basar
console.log(nms)
let nms2 = 10
console.log(nms==nms2)

//truthly
let newNum = 1
let newNum2 = "1"
let newNum3 = true
//falsely
let falsyValues = ""
let falsyValues2 = 0
let falsyValues3 = null
let falsyValues4 
let falsyValues5 = false

console.log(4 !== 4)


// let firstNum = prompt("Enter base value to calculate  area ")
// let firstNum2 = prompt("Enter the height  value")
// let area = 0.5 * firstNum * firstNum2
// console.log("The Base area is:",area)

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let pi = Math.PI
// let firstNum = prompt("Enter base value to calculate  area ")
// let firstNum2 = prompt("Enter the height  value")
// let area =  pi*firstNum*firstNum2
// console.log("The Base area is:",area)
let yunus = "Yunus"
let nameLenght = yunus.length
    nameLenght>7
    ? console.log("Your name is long ") : console.log("Your name is ok")

let firsName = "Yunus"
let lastName = "Edizarslan"
    !(firsName.length > lastName.length) // false değeri true ya çevirdik eğer çevirmesek false condition basardı.
    ? console.log(`Your name is ${firsName} and the lenght is ${firsName.length} and if we compare the ${lastName} your firstname will be short`)
    :console.log("Firstname longer than lastname")


// Yaş bilgisi alıp eğer kullanıcının yaşı 18 den küçükse sınıfa uygun olmadığını bildiren kod
// değişkenler promt ile alınıyor, tarayıcıdan calıstırabilirsiniz.
const dta = new Date()
// let nowYear = dta.getFullYear()
// let birthYear = prompt("Please enther the birth year:")
// let yearsold = nowYear - birthYear
// console.log(nowYear)
//     yearsold<18
//     ? console.log(`Your age is ${yearsold} and you can nat join this class`)
//     : console.log("You can join the class")


