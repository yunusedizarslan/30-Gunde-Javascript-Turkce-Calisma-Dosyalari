//Conditions -- Koşullar
//Koşullar yukarıdan aşağı doğru olacak şekilde hiyerarşik ilerler

// if condition-- if koşulları

let number1 = 1 
if(number1===1){
    console.log("Number is one")
}

if(number1>0){
    console.log(`The number of ${number1} is bigger than 0`)
}

let isRaining = true

if(isRaining) // - içindeki değere herhangi bir atama yoksa true ya bakar
{

    console.log("Şemsiye almalısın")
}

isRaining = false
if(isRaining) 
{

    console.log("Şemsiye almalısın")
}

else{ console.log("Hava yağmurlu değil")}

/* promt ile kullanıcıdan id ve şifre girmesini istedik daha sonra bu id dbId adında
 belirlediğimiz değişkene ve dbPassword değişkenine eşit ise Kullanıcıya hoşgeldin mesajını bastırdık 
 eğer kullanıcı blocklandıysa onun için de else if ile dbBlockedUser adındaki değişkenden kontrol edip
 diğer adımlara geçtik*/
let id= prompt("Enter your id number")
let password = prompt("Please enter your password")
let dbPassword = "123123"
let dbId = "yunusediz"
let dbBlockedUser = "yunusediza"

if (id==dbBlockedUser){
    let dbBlockedUserStatues = true
    alert("Your account is blocked")
}

else if (dbBlockedUserStatues == false){

    if(id === dbId){

        if(password=== dbPassword){

            alert(`Welcome ${id} ! `)
        }
    }

}


else{
    console.log(`Your id or password is wrong !`)
}

// Birden fazla koşula ihtiyacımız olursa else if i kullanıyoruz
// ilk koşuldan başlıyor aramaya
let number = 1 
if (number>1){
    console.log("Number 1")
}
else if (number==1){
    console.log("Number is equal to 1")
}

else {
    console.log("Number is not1")

}

// Switch Condition 

// Kullanıcı 1 den 3 e kadar bir sayı girerse ilgili console.log u basacak eğer girmezse default değeri basacak
let numbers = prompt("Please enter a value ")
switch(numbers) { // numbers değerlerine göre karşılaştırır
    case '1' : // eğer değer 1 ise
    console.log("Number is 1")
    break   // eğer sonuna break koymazsak yapı devam eder.
    case '2' :  // eğer değer 2 ise 
    console.log("Number is 2")
    break
    case '3' : 
    console.log("Number is 3")
    break

    default:  // caseleri karşılamayan değerler için default condition
    console.log("Wrong !")
}

// if else else if ile çirkin duran yapılarda switch case kullanılabilir.

// Ternary operatörleri
// tek satırlık şart blokları
let numsd = prompt("Enter a value")
numsd == 7
    ? console.log("Sayı 7")
    : console.log(`Yazılan sayi ${numsd}`)

numbsa = prompt("Enter a value")
numbsa > 0 ? "Sayi buyuk" : "Sayi kucuk"