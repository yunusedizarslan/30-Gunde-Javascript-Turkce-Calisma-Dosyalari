// foksiyonlar 
//Belirli bir görevi veya kodu çağırıyoruz
// call fonksiyonu doğrudan cağırmak // invoke dolaylı yoldan çağırmak

//fonksiyon tanımlama şekilleri

function sayHello() {

    console.log("Hello")

}
// fonksiyonu çağırmadan onu kullanamayız
sayHello()

// bir işlemi birçok kez yapıyorsan bu işlemi fonksiyon içine alırsın  her yerde aynı işlemi yapmak zorunda kalmazsın

let message = "Merhaba Dünya"

function msgFunction(){
let message = "Hello World" // Normalde iki değeri aynı anda tanımlayamazdık fakat blok kapsamındaki değişken ile dışarıdaki değişken aynı değildir.
console.log(message)

}
// function içindeki kod bloğu sadece function içinde çalışır
// fonksiyonlar varsayılan olarak undefined.
// eğer fonksiyonun dönüş değerini bir değişkene atamak istiyorsak return kullanıyoruz

function nwFunc(){
    let messd = "Merhaba "
    console.log(messd)
    return messd // fonksiyonun return değerine messd yi atıyoruz 



}
console.log(nwFunc())

// fonksiyonun içine parametre atamak

function sumFunction(num1,num2){

   
    return num1+num2 // num1 ve num2 nin toplamını geri dön
    // let total = num1 + num2 
    // return total ile de yazılabilir

}



console.log(sumFunction(25,30)) // num1 25 dir num2 30 dur

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
  
  
   

  function testFunction(nums1) {

    let total = 0

    for(let func1 = 0 ; func1 < nums1.length; func1++ ){
        total = total + nums1[func1]
       
        


    }
    return total

  }
  let  dizisa = [1,2,3,4,5]
  console.log("Array içerisindeki değerlerin toplamı:",testFunction(dizisa))

  //eğer parametre sayısını bilmiyorsak;

    // function içinde arguments adınde bir özel değişken kullanıyoruz ve böylelikle sayısını bilmediğimiz parametreleri kullanabiliyoruz
    // Normal fonksiyon tanımladıysak arguments kullanılabilir fakat arrow function da kullanılamaz.
    //decleration
  function topla(){
    totalsa = 0
    for (p = 0 ; p<arguments.length;p++){

        totalsa += arguments[p]
       

    }

    return totalsa

  } 

  console.log(topla(1,2,3,4,5))

  //Anonymous function isimsiz fonksiyon

  const sayAS = function(isim)  { // sayAs yi artık bir değişken gibi değilde bir fonksiyon gibi çağırıyoruz

    return `Hello ${isim}`

  }
  console.log(sayAS("Yunus"))

  //Expression function - Ananymous

  let tpls = function(n1,n2){

    let totls = n1+n2
    return totls

  }

  console.log(tpls(5,1))


  //Self Invoking Function Kendi Kendini çağıran fonksiyonlar
  // Kapsamı izole etmek

  let merhabaDe = function(isim1){

    console.log(isim1)

  }("Yunus")

 
  //    Arrow Function
  // Normal fonksiyonda biz
  function denems(names){
    return `Hoşgeldiniz : ${names}`
 // parametresiz işlemlerde arguments
  }
  console.log(denems("yunus"))

  //Arrow fonksiyonda ise

  let denemesa = (x,y) => {

    return x*y

  }
  console.log(denemesa(4,2))
// tek satır arrow
  const hello2 = (name1,surname1) => `Hello ${name1} ${surname1}`
  console.log(hello2("Akif","Ahmet"))


  const sayilars = (as1,as2,...numbs) => {  // ... operatörü alacağamız parametreleri aldığımızda kalanları bir diziye alıyor

    console.log(numbs)
  }
 sayilars(1,2,3,4,5)

// tek satırlı fonksiyonlar

let tpla = (x,y) => x+y
console.log(tpla(5,2))

const sayiKaresi = n => n*n
console.log(sayiKaresi(5))

 const sqrt = (...numsd) => numsd*numsd

 console.log(sqrt(4))


 let nameSurname = (name12,surna12) => `Welcome ${name12} ${surna12}`
 console.log(nameSurname("Ahmet","Mehmet"))

 let nameSurname2 = (nams,surnams) => 
 {
    return `Welcome ${nams} ${surnams}`


 }
 console.log(nameSurname2("Atınc","Aslan"))
 

 // Function with Default Parameters

 function multipy(num1,num2=2){ // eğer num2 parametresi verilmezse default değer olan 2 yi alır

    return num1*num2


 }
 console.log(multipy(10)) // 10 u default değer olan 2 ile çarptı
 console.log(multipy(10,3))     


 let nameSurnamss = (name1 = "İsim",name2="Girilmedi") => {

    return name1+" "+name2

 }
 console.log(nameSurnamss())
 console.log(nameSurnamss("Yunus","Edizarslan"))

 function birtdate(birthyear,currentyear = 2022) {

    return currentyear - birthyear

 }

let years = prompt("Enter your birth year")
console.log(`Sizin doğum gününüz:`,birtdate(years))
alert(birtdate(years))

