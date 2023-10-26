// for (initialization, condition, increment/decrement) {
//     code goes here
// }

// for (let i = 0; i < 10; i++) {
//     console.log("I love reading code")
//   }
// initialization is where the loops starts from whiile condition is the number of time the loop reoccure (-1 time)

// let sum = 0;
// for (let i = 0; i < 101; i++) {
//   sum += i;
//   console.log(sum)
// }

// let sum = 0
// for (let i = 0; i < 101; i += 2) {
//   sum += i
//   console.log(sum)
// }

// const nums = [1, 2, 3, 4, 5]
// for (let i = 0; i < 6; i++) {
//   console.log(nums[i])
// }

// for (let i = 5; i >= 0; i--) {
//     console.log(i)
//   }

// const nums = [1, 2, 3, 4, 5]
// const lastIndex = nums.length - 1
// const newArray = []
// for (let i = lastIndex; i >= 0; i--) {
//   newArray.push(nums[i])
// }

// console.log(newArray)

// let count = prompt('Enter a positive number: ')
// while (count > 0) {
//   console.log(count)
//   count--
// }
// let count = 0
// do {
//   console.log(count)
//   count++
// } 
// while (count < 11)

// const numbers = [1, 2, 3, 4, 5]
// for (const number of numbers) {
//   console.log(number)
// }
// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// for (const country of countries) {
//   console.log(country.toUpperCase())
// }
// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach((number, i, numbers) => {
//   console.log(number, i, numbers)
// })

// const number = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < 11; i++) {
//     console.log(i);

// }

// let count = 0
// while (count < 11 ) {
//     console.log(count)
//     count++
// }

// let count = 0
// do {
//     console.log(count);
//     count++  
// } while (count < 11);

// const foodClass = ['Beans', 'Rice', 'Garri', 'Amala']
// for (const i of foodClass) {
//     console.log(i);
// }
// foodClass.forEach((foodItem, i) => {
//     console.log(foodItem,i);
// });

// let sum = 0
// for (let i = 0; i < 11; i++) {
//     sum += i ; 
//     console.log(sum);
// }

// let sum = 0
// for (let i = 0; i <11; i += 2) {
//     sum += i;
//     console.log(sum);
// }

// let sum = 0
// for (let i = 0; i <11; i++) {
//     if (i % 2 == 0) {
//         sum += i
//     }
// }
//     console.log(sum);

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
//   }
  
//   for (const key in user) {
//     console.log(key, user[key])
//   }

// for (let i = 0; i <= 5; i++) {
//     if (i == 4) {
//       break
//     }
//     console.log(i)
//   }

// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue
//     }
//     console.log(i)
//   }