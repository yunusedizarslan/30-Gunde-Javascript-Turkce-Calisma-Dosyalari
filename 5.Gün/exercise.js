let newArrayss = new Array()
let newArraysss = []
let newArrayssss = Array()

let fiveLenghtArray = new Array(5)
console.log(fiveLenghtArray.length)

let difArray = [1,"Yunus",{},[],null,undefined]

let companies = ["IBM", "MİCROSOFT","ORACLE","APPLE"]
console.log(companies)
console.log(companies[0])
console.log(companies[companies.length-1])
let upperCase = companies.toString()
upperCase = upperCase.toUpperCase()
console.log(upperCase)
let lowerCase = companies.toString()
lowerCase = lowerCase.toLowerCase()
console.log(lowerCase)
let compArrays = Array(lowerCase) // çevirilen stringi arraye çevirdik
console.log(compArrays)

console.log(companies.reverse()) // tersine çevirdik
console.log(companies.sort())

console.log(companies.slice(0,3))
console.log(companies.slice(companies.length-1,companies.length-3))
console.log(companies.pop())
console.log(companies.shift())

console.log(companies.slice(0,companies.length)) // array i boşalttık


