//Dögüler
// for (intilazitation, condition, inreament/decreament)
//For Döngüsü
for(let i = 0; i<10;i++){  // loop conditionları ; ile ayırıyoruz
    console.log(i)
}

for(let z = 0 ; z<100;z++){

    console.log("z:",z)
}

for(let k = 0; k<=5;k++){

    console.log(`${k} + ${k} = ${k+k}`)
}

let namesa = ["Yunus","Ediz","Arslan","Mehmet","Ahmet"]

for(let k = 0; k<= namesa.length; k++){

console.log(namesa[k])

}
//Dizideki elemanları yani bir diziye almak
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr = []
for( let asd = 0 ; asd < countries.length; asd++){

    newArr.push(countries[asd].toUpperCase()) // push ile aray a ekliyoruz

}
console.log(newArr)


//Dizideki elemanları toplama
let nums = [1,2,3,4,5,6,7,8]
let total = 0

for(let ı = 0 ; ı<nums.length;ı++){

total= total+nums[ı]
// total+=nums[ı] yukarıdaki kodun daha kısa sekilde yazılımı 

}
console.log(total)

let nameFolder = ["Can","Ahmet","Mehmet","Atakan"]
let updatedNameFolder = []
for(let nf = 0 ; nf < nameFolder.length ; nf++){

updatedNameFolder.push(nameFolder[nf].toUpperCase()) // hangi array'in içine push edilecekse o seçilip .push(içine atılacak değerler)
// toLocalUpperCase ile türkçe karakter sorunu çözülür.
}
console.log(updatedNameFolder)

let nameArray = ["Atakan","İsmail","Sedat","Ahmet","Yunus"]
let newNamesArray = []
for(i = 0 ; i< nameArray.length ; i++){

newNamesArray.push(nameArray[i].toLocaleUpperCase())


}

console.log(newNamesArray)

//While Loops 

let is = 0
while(is<=5){ // is true olduğu sürece içindeki işlemleri yapar

    console.log(is)
    is++ // sonsuz döngüye girmemek için is i artırıyoruz

}

//do While loops

let doW = 0
do{  //koşul true olmasa bile do kodunu bir kere çalıştırıyor bu kodu 1 kere çalıştırman lazım ise bunu kullanacaksın ilk yap sonra bak
    console.log(doW)
    doW++
} while(doW<=5)


// Dizideki her elemanın indexi ile uğraşmadan direkt içinde dönmek için
//For of 
let dsa = [1,2,3,4]
for(let ads of dsa){ // ads değişkeni dsa nın içindeki verileri direkt tutuyor.for değişken in değişken python koduna benziyor

    console.log(ads)
}

let testName = ["Yunus","Ediz","Arslan"]
let arrayName = new Array()

for(let testAry of testName){
    
    arrayName.push(testAry) // testAry dongu içinde tek tek döneceği için direkt çağırabiliriz.
}

console.log(arrayName)

// Break Döngüyü durdurmak için kullanılır.
//  Koşulu çiğnemek için döndüyü durdurmak için kullanıyoruz

for(let kl = 0 ; kl < 5; kl++){

if(kl==3){ // eğer 3 ü bulursa döngüyü durdurur
    break 
}

console.log(kl)
}


for(let kl = 0 ; kl < 5; kl++){

    if(kl==3){ // eğer 3 ü bulursa döngüyü durdurur
        continue // eğer 3 ü bulursan onu atla gibi
    
    }
    
    console.log(kl)
    }
    
    