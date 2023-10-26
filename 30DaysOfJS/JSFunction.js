// function square() {
//     let num = 2
//     let sq = num * num
//     console.log(sq)
// }

// square()
// for (let i = 0; i < 101; i++) {
//     const square = i;

//     console.log(square);
    
// }

// function addTwoNumbers() {
//     let numOne = 10
//     let numTwo = 20
//     let sum = numOne + numTwo
  
//     console.log(sum)
// }
// addTwoNumbers() 

// function addThreeNumber () {
//     let numOne = 3
//     let numTwo = 3
//     let numThree = 3

//     let sum = numOne * numTwo * numThree

//     console.log(sum);
// }
// addThreeNumber ()

// function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }

// printFullName()

// function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }
// console.log(printFullName())

// function areaOfCircle(r) {
//     let area = Math.PI * r * r
//     return area
//   }
  
//   console.log(areaOfCircle(10))

// function square(number) {
//     return number **2
//   }
  
//   console.log(square(10))

// function sumTwoNumbers(numOne, numTwo) {
//     let sum = numOne + numTwo
//     console.log(sum)
//   }
//   sumTwoNumbers(10, 20)

// function fullName(firstName, lastName) {

//     let fullName = `my first name is ${firstName} and my last name is ${lastName}`
//     return fullName
// }
// console.log(fullName("Oyinloye", "Tunbosun"));

// fullName("Oyinloye", "Tunbosun")

// function printFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`
//   }
//   console.log(printFullName('Asabeneh', 'Yetayeh'))
//   console.log(printFullName('Ramsey', 'Yetayeh'))
//   console.log(printFullName('Noah', 'Yetayeh'))
//   console.log(printFullName('Asake', 'Yetayeh'))

// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//       console.log(sum);
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   console.log(sumArrayValues(numbers));

// function sumAllNums() {
//     console.log(arguments)
//   }
  
//   sumAllNums(1, 2, 3, 4)

// function sumAllNums() {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//       sum += arguments[i]
//     }
//     return sum
//   }
  
//   console.log(sumAllNums(1, 2, 3, 4)) // 10
//   console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
//   console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))

// const square = function(n) {
//     return n * n
//   }
  
//   console.log(square(2)) 

// (function(n) {
//     console.log(n * n)
//   })(10)

//   let squaredNum = (function(n) {
//     return n * n
//   })(10)

// const square = n => {
//     return n * n
// }
// console.log(square(5));

// function number(m,n,y) {
//     return m + n + y
// }
//     console.log(number(4,8,12));

// const number = (m,n,y) => {
//     return m + n + y
// }

// console.log(number(4,8,12));

// function artistes(arr) {
    
//     console.log();
// }
// return artistes;
// }
// const artistesList = ['Enya', '21 Pilots', 'Cold Play', 'Asa', 'Justin Beber']
//   console.log(artistes(artistesList));

//   {



// const artistesSet2 = ['Fela', 'Essien Igokwe', 'Raskimono', 'Daddy Shoki']
// let newArtist2 = 'Lagbaja'
// artistesSet2.push(newArtist2);
// console.log(artistesSet2);



// function artistesNames(arr) {
    
// }

// const changeToUpperCase = (arr) => {
//     const newArr = [];
//     for (const country of arr) {
//       newArr.push(country.toUpperCase());
//     }
//     return newArr;
//   };
  
//   const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
//   console.log(changeToUpperCase(countries));

// function greetings(name = "Peter") {
//     let message = `${name}, welcome to 30 Days Of JavaScript!`;
//     return message;
//   }
  
//   console.log(greetings());
//   console.log(greetings("Asabeneh"));

// function generateFullName(firstName = "Asabeneh", lastName = "Yetayeh") {
//     let space = " ";
//     let fullName = firstName + space + lastName;
//     return fullName;
//   }
  
//   console.log(generateFullName());
//   console.log(generateFullName("Yele", "Smith"));

// function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
//     let age = currentYear - birthYear;
//     return age;
//   }
  
//   console.log("Age: ", calculateAge(1994));

// a = 'JavaScript'  
// b = 10  
// function letsLearnScope()
// {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b)
// letsLearnScope()

// function letsLearnScope() {
//     let a = 'JavaScript' // is a global scope it will be found anywhere in this file
//   let b = 10
//     console.log(a, b) // JavaScript 10, accessible
//     if (true) {
//       let a = 'Python'
//       let b = 100
//       console.log(a, b) // Python 100
//     }
//     console.log(a, b)
//   }
//   letsLearnScope()
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let c = 30
//   if (true) {
//     // we can access from the function and outside the function but 
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let d = 40
//     console.log(a, b, c, d) // Python 20 30
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, c) // JavaScript 10
// }
// letsLearnScope()
// console.log(a, b)
// const person = {
//     firstName: "Asabeneh",
//     lastName: "Yetayeh",
//     age: 250,
//     country: "Finland",
//     city: "Helsinki",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Node",
//       "MongoDB",
//       "Python",
//       "D3.js",
//     ],
//     getFullName: function () {
//         return `${this.firstName}${this.lastName}`;
//       },  };
// //   console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.getFullName());

// method 2 for getting value for an object 


// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["age"]);
// console.log(person["skills"]);

// const person = {
//     firstName: "Asabeneh",
//     lastName: "Yetayeh",
//     age: 250,
//     country: "Finland",
//     city: "Helsinki",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Node",
//       "MongoDB",
//       "Python",
//       "D3.js",
//     ],
//     getFullName: function () {
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
// person.nationality = "Ethiopian";
// person.country = "Finland";
// person.title = "teacher";
// person.skills.push("Meteor");
// person.skills.push("SasS");
// person.isMarried = true;

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(", ");
//   let lastSkill = this.skills.splice(this.skills.length - 1);

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// console.log(person);
// console.log(person.getPersonInfo());

// const person = {
//     firstName: ["Asabeneh", "Bosun", "Ajoke", "Rotimi", "Wale"],
//     age: 250,
//     country: ["Finland", "Mexico", "Japan", "Canada", "Nigeria"],
//     city: ["HelsinkiFin", "TijuanaMex", "TokyoJap", "TorontoCa", "AbujaNig" ],
//     skills: ["HTML", "CSS", "JS"],
//     title: "teacher",
//     address: {
//       street: "Heitamienkatu 16",
//       pobox: 2002,
//       city: "Helsinki",
//     },
//     ifCountry: function() {
//         if (this.country[Math.floor(Math.random()*this.country.length)] === 'Mexico') {
//             return this.city[1]
//         } else if (this.country[Math.floor(Math.random()*this.country.length)] === this.country[2]) {
//             return this.city[2]
//         } else if (this.country[Math.floor(Math.random()*this.country.length)] === this.country[3]) {
//             return this.city[3]
//         } else if (this.country[Math.floor(Math.random()*this.country.length)] === this.country[4]) {
//             return this.city[0]
//         }  
//     },
//     getPersonInfo: function () {
//       return `I am ${this.firstName[Math.floor(Math.random()*this.firstName.length)]} and I live in ${this.ifCountry()}, ${this.country[Math.floor(Math.random()*this.country.length)]}. I am ${this.age}.`;
//     },
//   };
// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);

// const keys = Object.keys(copyPerson);
// console.log(keys); //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address);
// console.log(address);

// // const values = Object.values(copyPerson);
// // console.log(values);


// console.log(person.getPersonInfo());

// const callback = (n) => {
//     return n ** 2
//   }
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   console.log(cube(callback, 3))
  
// const numArray = [1,2,3,4]
// Let[num1, num2, num3, num4] = numArray
// console.log(numArray)

// const numArray = [1,2,3,4]
// let [num1, num2, num3, num4] = numArray
// console.log(numArray)

// const foodSet = [['Rice', 'Beans'],['Garri', 'Groundnut']]

// for (const[firstFood,secondFood] of foodSet)
// console.log(firstFood)

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//   }
//   let { width, height, area, perimeter='30' } = rectangle
  
//   console.log(width, height, area, perimeter)

// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   job: 'Instructor and Developer',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)']
// }
// // Lets create a function which give information about the person object without destructuring

// const getPersonInfo = obj => {
//   const skills = obj.skills
//   const formattedSkills = skills.slice(0, -1).join(', ')
//   const languages = obj.languages
//   const formattedLanguages = languages.slice(0, -1).join(', ')

//   personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//     obj.age
//   } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//   return personInfo
// }

// console.log(getPersonInfo(person))

// const rect = {
//     width: 50,
//     height: 20
//   }
//   const calculatePerimeter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
//   }
  
//   console.log(calculatePerimeter(rect))

// const calculatePerimeter = ({ width, height }) => {
//     return 2 * (width + height)
//   }

//   console.log(calculatePerimeter(rect))

// const todoList = [
//     {
//       task:'Prepare JS Test',
//       time:'4/1/2020 8:30',
//       completed:true
//     },
//     {
//       task:'Give JS Test',
//       time:'4/1/2020 10:00',
//       completed:false
//     },
//     {
//       task:'Assess Test Result',
//       time:'4/1/2020 1:00',
//       completed:false
//     }
//     ]
    
//     for (const {task, time, completed} of todoList){
//       console.log(task, time, completed)
//     }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, ...plea] = nums

// console.log(num1,  ...plea)
// const countries = [
//     'Germany',
//     'France',
//     'Belgium',
//     'Finland',
//     'Sweden',
//     'Norway',
//     'Denmark',
//     'Iceland'
//   ]
  
//   let [gem, fra, , ...nordicCountries] = countries
  
//   console.log(gem)
//   console.log(fra)
//   console.log(nordicCountries)
// const evens = [0, 2, 4, 6, 8, 10]
// const evenNumbers = [...evens]

// const odds = [1, 3, 5, 7, 9]
// const oddNumbers = [...odds]

// const wholeNumbers = [...evens, ...odds]

// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(wholeNumbers)
// console.log(wholeNumbers.sort(( a,b) => a-b));

// const sumAllNums = (...args) => {
//     console.log(args)
//   }
  
//   sumAllNums(1, 2, 3,4,5,6,7,8,9,10)

//   const sumAllNums = (...args) => {
//     let sum = 0
//     for (const num of args){
//       sum += num
//     }
//     return sum
    
//   }
  
//   console.log(sumAllNums(1, 2, 3,4,5))

// const names = ['Asabeneh', 'Brook', 'David', 'John']
//   let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
//   console.log(firstPerson, fourthPerson)

// const fullstack = [
//     ["ReactJS", "Tailwind", "CSS"],
//     ["Python", "MongoDB", "SQLDB"],
// ];
// const [Frontend, Backend] = fullstack;
// let [feSkillOne, feSkillTwo] = Frontend;
// let [beSkillOne, beSkillTwo] = Backend;

// console.log(feSkillOne);
// console.log(beSkillOne);


// const names = ["Asabeneh", "Brook", "David", "John"];
// let [, secondPerson, , fourthPerson] = names; // first and third person is omitted

// console.log(secondPerson, fourthPerson);

// const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// const [num1, num2, num3, num4, ...rest] = nums

// // console.log(num1, num2, rest);
// console.log(rest);

// const countries = [
//     ["Finland", "Helsinki"],
//     ["Sweden", "Stockholm"],
//     ["Norway", "Oslo"],
// ];
// for (const [first, second] of countries){
//     console.log(first, second);
// }

// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//   };
//   let { width, height, area, perimeter=24 } = rectangle;
  
//   console.log(width, height, area, perimeter);

// let firstName = 'Asabeneh'
// const lastName = 'Bolanle'
// let fullName = `${firstName} ${lastName}`
//     console.log(fullName)

// let square = 2 * 2
// console.log(square)

// console.log("Hello, world")

// let num = 10
// // console.log(num.toLowerCase())

// try {
//   let lastName = 'Yetayeh'
//   let fullName = firstName + ' ' + lastName
// } catch (err) {
//   console.log(err)
// }

// try {
//     let lastName = 'Yetayeh'
//     let fullName = `${firstName} ${lastName}`
//   } catch (err) {
//     console.log('Name of the error:', err.name)
//     console.log('Error message:', err.message)
//   } finally {
//     console.log('In any case it will be executed')
//   }

// const throwErrorExampleFun = () => {
//     let message
//     let x = prompt('Enter a number: ')
//     try {
//       if (x == '') throw 'empty'
//       if (isNaN(x)) throw 'not a number'
//       x = Number(x)
//       if (x < 5) throw 'too low'
//       if (x > 10) throw 'too high'
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   throwErrorExampleFun()

// try {
//     let lastName = 'Yetaye'
//     let firstname = 
//     let fullName = `${firstName} ${lastName }  `
//     if (lastName == undefined) throw `Don't you have last name?`
//     if (firstName == undefined) throw `Don't you have last name?`
// } catch (err) {
//     console.error (err)
// } finally {
//     console.log(`Don't you have last name?`)
// }

// const allTitles = document.getElementsByTagName("h1");

// console.log(allTitles); //HTMLCollections
// console.log(allTitles.length); // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]); // prints each elements in the HTMLCollection
// }

// let firstTitle = document.getElementById("first-title");
// console.log(firstTitle); // <h1>First Title</h1>

// const firstH1 = document.querySelectorAll('h1')
// console.log(firstH1);

// for (let i = 0; i < firstH1.length; i++) {
//     const element = firstH1[i];
//     console.log(element);
// }

// firstH1.forEach = (h1 => {
//     console.log(h1);
// });

// const titles = document.querySelectorAll("h1");
// titles[3].className = "title";
// titles[3].id = "fourth-title";

// const titles = document.querySelectorAll("h1");
// titles[3].setAttribute("class", "title");
// titles[3].setAttribute("id", "fourth-title");

// const titles = document.querySelectorAll("h1");
// titles[3].textContent = "Fourth Title";

// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px"; // all titles will have 24px font size
//   title.style.fontFamily = "cursive"
//   if (i % 2 === 0) {
//     title.style.color = "green";
//   } else {
//     title.style.color = "red";
//   }
// });

// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px"; // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.backgroundColor = "green";
//   } else {
//     title.style.backgroundColor = "red";
//   }
// });

// const titles = document.querySelectorAll("h1");
// titles.forEach((title, i) => {
//   title.style.fontSize = "24px"; // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.fontSize = "20px";
//   } else {
//     title.style.fontSize = "30px";
//   }
// });

// JS DAY 12 Exercise 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using **_document.querySelector(tagname)_** and tag name

// const firstP = document.querySelector("p")
// console.log(firstP);

// 2. Get each of the paragraph using **_document.querySelector('#id')_** and by their id

// let pId1 = document.querySelector ('#first-title2')
// let pId2 = document.querySelector ('#first-title1')
// let pId3 = document.querySelector ('#first-title3')
// let pId4 = document.querySelector ('#first-title4')

// console.log(pId1, pId2, pId3, pId4 );

// 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_** and by their tag name

// const allP = document.querySelectorAll('p')
// console.log(allP);

// 4. Loop through the nodeList and get the text content of each paragraph

// const title = document.querySelectorAll('p')
// let textContent = element.select()
// console.log(textContent);

// const pId = document.getElementById('first-title2')
// console.log(pId);

// let pId1 = document.querySelector ('#first-title2')
// let pId2 = document.querySelector ('#first-title1')
// let pId3 = document.querySelector ('#first-title3')
// let pId4 = document.querySelector ('#first-title4')

// console.log(pId1, pId2, pId3, pId4 );

// const parags = document.querySelectorAll('p')
// parags[0].textContent = 'Mark Zuck'

// parags[0].className = 'begining'
// parags[1].setAttribute('title', 'ending') 
// parags[2].setAttribute('title', 'stop') 
// parags.forEach((element) => {
//     console.log(element);
// })