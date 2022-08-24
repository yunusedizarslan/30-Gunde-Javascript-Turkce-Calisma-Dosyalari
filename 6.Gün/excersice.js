const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
for(let k = 0 ; k <= 10 ; k++){
console.log(countries[k])
    
}
console.log("----------------------")
let ba = 0
while(ba<=10){
    console.log(countries[ba])
    ba++

}

console.log("--------------------")


for(let i = 10 ; i>=0 ;i--) { // 10 dan geriye gideceğimiz için i >=0 demeliyiz
    console.log(countries[i])
}
console.log("--------------------")
let numsw = 10
while(numsw>=0){

console.log(countries[numsw])
numsw--


}
console.log("-----------")

for(let ksw of countries){

    console.log(ksw)
}

let sym = ""
for(let is = 1 ; is<=7 ; is++){

    console.log("#".repeat(is)) // is kadar tekrar et 

}

for(nb = 0; nb <= 10 ; nb++){

    console.log(`${nb} * ${nb} = ${nb*nb}`)

}
//1 den 100 e kadar çift sayılar
for (q = 0 ; q<=100;q++){

    if(q%2==0){
        console.log(q)

    }

}
// 1 den 100 e kadar tek sayılar.
for (q = 0 ; q<=100;q++){

    if(q%2==1){
        console.log(q)

    }

}

// 1 den 100 e kadar olan sayıların toplamı
let total = 0
for (q = 0 ; q<=100;q++){

    total= total+q 
    

}
console.log("The sum of all number between 0 to 100 is: ",total)

let totalOdd = 0

    // 1 den 100 e kadar tek sayıların toplamı
for ( o = 0; o <=100 ; o++){

    if(o%2==1){

       totalOdd= totalOdd+o
    }

}
 
console.log("The sum of odd number between 0 to 100 is:",totalOdd)

 // 1 den 100 e kadar çift sayıların toplamı
let totalEven = 0

for ( o = 0; o <=100 ; o++){

    if(o%2==0){

       totalEven= totalEven+o
    }

}

console.log("The sum of even number between 0 to 100 is:",totalEven)

let newArrays = []

// 1 ile 10 arası rastgele 5 sayı oluşturma
for(let qw = 0;qw<=5;qw++){

newArrays.push(Math.floor(Math.random()*10)+1 ) // +1 kaçtan başlayacağını belirtir.

}
console.log(newArrays)

let newArrays1 = []

// Rastgele birbirinden farklı sayı oluşturma
const arr = [];
while (arr.length < 8) {
  const r = Math.floor(Math.random() * 100) + 1;
  if (arr.indexOf(r) === -1) {
    arr.push(r);
  }
}
console.log(arr);

// Rastgele string oluşturma
const result = Math.random().toString(36).substring(2,7);
console.log(result);
