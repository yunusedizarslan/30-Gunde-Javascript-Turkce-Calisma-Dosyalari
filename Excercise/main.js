let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
 text = text.split(".") // . ya kadar olan bölümleri böler
console.log(text)
text = text.toString()
console.log(text)
text = text.split(" ") // tırnağın içi boş kalırsa harf boşlık bırakırsak cümle
console.log(text)
text = Array(text)

console.log(text)

let  shopping = ["Milk","Coffe","Tea","Honey"]

if(shopping.includes("Meat") == 0){

    shopping.unshift("Meat")

    
    

}

if(shopping.includes("Sugar") == 0) {

shopping.push("Sugar")

}

let allergtToHoney = 1 
if(allergtToHoney == 1){

  let indexOfHoney =   shopping.indexOf("Honey")

  delete shopping [indexOfHoney] // seçilen 
    console.log(shopping)
}
shopping[shopping.indexOf("Tea")] = "Green Tea"
  console.log(shopping)

  let num = [1,2,3,4,5]
  let num2 = [5,6,7,8,9,10]
  console.log(num.concat(num2))

  let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
  ages = ages.sort()

  let minAge = ages[0]
  let maxAge = ages[ages.length-1]
  console.log(minAge,maxAge)
  let totalAge = ages[0]
