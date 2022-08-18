// let challenge = "30 Days Of Javascript"
// console.log(challenge)

// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(0,2))

// let newChallange = challenge.substr(3,challenge.length-1)
// console.log(newChallange)
// console.log(newChallange.includes("Days"))
// let newSplittedChallange = "Welcome to Js"
// console.log(newSplittedChallange.split(" "))

let companies = "Facebook,Google,IBM, Apple, Oracle, Amazon "
// companies= companies.split(",")
// console.log(companies)
// let newArray = []
// newArray[0] = companies[0]
// console.log(newArray)

console.log(companies.replace("Facebook", "Youtube"))
console.log(companies.charAt(15))

console.log(companies.charCodeAt(15)) // 15. Karakterin kodu

console.log(companies.indexOf("Google")) // kaçıncı indexde google var
console.log(companies.lastIndexOf("n")) // index of ilk last index of sonuncuyu yakalar
console.log(companies.search(/Facebook/)) // facebook kaçıncı indexte

let newValue = "   YUNUS   "
console.log(newValue.trim("")) // boşlukları siler

console.log(companies.startsWith("Facebook"))
console.log(companies.endsWith("Facebook")) // eğer ilk veya son index ilgili değeri içeriyorsa true içermiyorsa false basar

console.log(companies.match(/a/g)) // sadece küçük a ları alır gi dersek de tüm g tiplerini


console.log(companies.repeat(2))

let number = "10"
let number2 = +number
console.log(number2)
let floatNumbers = "9.91"
newFloatNumber = parseFloat(floatNumbers)

console.log(Math.ceil(newFloatNumber))

let newArrayTest = ["Python","Jargon"]
console.log(newArrayTest[0,1].includes("on"))

console.log(Math.floor(Math.random()*101))
console.log(Math.random(50)*101) // 50 ile 100
console.log(Math.floor(Math.random(0)*255))

let javascriptNode = "Javascript"
console.log(javascriptNode[Math.floor(Math.random(javascriptNode.length)*javascriptNode.length-1)]) // random bir sayı basar ve o indexte arar
console.log(javascriptNode[1])

console.log("1 1 1 1 1\n2 1 2 4 8\n3,1,3,9,27")

let newArrayTo = "You cannot end a sentence with because because because is a conjunction"
let firsIndex = newArrayTo.indexOf("because")
let lastIndex = newArrayTo.lastIndexOf("e")
console.log(firsIndex)
console.log(lastIndex)
console.log(newArrayTo.slice(31,54))
let asdd = newArrayTo.substring(0,31)
let asdd2 = newArrayTo.substring(55,newArrayTo.length)
console.log(asdd+asdd2)

let love = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(love.match(/love/gi))


