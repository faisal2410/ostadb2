// console.log("We love Javascript")

// let instituteName="Lead Educare";

// console.log(`We are learning 
// at ${instituteName}`)

// var x=5;
// var y=6;
// console.log(`The total of x and y ${x+y}`);

// let sName="Abdur rahman talha";
// let age =15;
// let isStudent =false;
// let desc=`My name is ${sName}, 

// My age is ${age} and I am a ${isStudent} this`;
// console.log(desc);
// // let newDesc="My name is"+" " +sName +"/n"+ +"I am "+" "+age+" " +"years old" 
// // console.log(newDesc);

// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")
// console.log("js")

/* 
1. Loop variable
2. condition inside while
3. Loop body
4. Change the loop variable
*/

// let i=0;
// while(i<100){
//     if(i%5==0){
//         console.log(`This is an even number ${i}`)
       
//     }
//     i++;
// }

// for(let i=0;i<10;i++){
//     console.log(i)
// }

// (condition)?():()  //ternary operator

// if(condition){
//     //
// }else{
//    // 
// }

// let isStudent=false
// let age=15
// console.log(`He is ${age>=18?'a voter':'not a voter'}`)

// console.log(`He is ${isStudent==true?'a student ':'not a student '}`)

// console.log(`He is  ${isStudent==true?'a student':'not a student'}`)
// var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

// for(let el of numbers){
//    if(el>=50){
//     console.log(el)
//    }
// }

// const id=[]
// for(let i=0; i<numbers.length; i++){
//     let el=numbers[i]
//     if(el>=50){
//         id.push(el)
//     }

// }
// console.log(id)

// The Conditional (Ternary) Operator
// const age = 10;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


// var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];

// for(let el of numbers){
//   if(el>=50){
//     console.log(el)
//   }
// }
// console.log(numbers)

// let b=numbers.length

// for(let i=0;i<=b-1;i++){
  
//     console.log("The printed number is",numbers[i])
// }

const sakib={
    name:"Sakib al hassan",
    age:35,
    isActive:true,
    isAllRounder:true,
    country:"Bangladesh",
    scores:[35,89,65]
}
// sakib['isBatter']=true
// console.log(sakib)

// console.log(sakib.country)
// console.log(`The cricketer name is ${sakib.name}, his age is ${sakib.age}, country is ${sakib['country']}`)
// console.log(Object.keys(sakib))
// console.log(Object.values(sakib))

// for(let el in sakib){
//     console.log(sakib[el])
// }

// const numbers=[12,15,16,25,29]
// const newNum=[38,...numbers,55]
// console.log(newNum)

// const [firstMatchScore,secondMatchScore,thirdMatchScore]=sakib.scores
// console.log(firstMatchScore)

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {weight:employeeWeight}=employee.specification;
// const {brand}=employee.specification.watch
// console.log(weight)
// console.log(brand)

console.log(employeeWeight)

// const employeeMachine=employee.machine;
const employeeLanguage=employee.languages[employee.languages.length-1]
// console.log(employeeMachine)
console.log(employeeLanguage)
// const {machine,ide,languages,specification}=employee

// console.log("=======>",machine,languages,specification)
// swapping

// let first=15;
// let second=20;
//  [first,second]=[second,first]

// wrong approach
// second=first;
// first =second;
// let temp=first;
// first=second;
// second=temp;

// console.log(first,second);

// Destructuring
const numbers=[25,35,89]
const[,,z]=numbers
// const [,,third]=numbers
console.log(z)

