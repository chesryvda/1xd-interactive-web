/*
  __   ____  ____   __   _  _  ____ 
 / _\ (  _ \(  _ \ / _\ ( \/ )/ ___)
/    \ )   / )   //    \ )  / \___ \
\_/\_/(__\_)(__\_)\_/\_/(__/  (____/
*/

/*

*/

// 1 - create an array `meals` with three of your favorite meals and log it to the console

let arrMealsV1 = ['kebab', 'pizza', 'burger'];
console.log(arrMealsV1);

// 2 - create an array `drinks` with three of your favorite drinks and log it to the console

let arrDrinks = ['cola', 'fanta', 'ice tea'];
console.log(arrDrinks);

// 3 - create a variable `lastmeal` that stores the last item from the `meals` array
// use the pop() function - log the result to the console

let arrMealsV2 = ['kebab', 'pizza', 'burger'];
let lastmeal = arrMealsV2.pop();
console.log(lastmeal);

// 4 - loop over the meals array and print each meal to the console

let arrMealsV3 = ['kebab', 'pizza', 'burger'];
for (let meal = 0; meal < arrMealsV3.length; meal ++) {
  console.log(arrMealsV3[meal]);
}

// 5 - add a meal called `cereal` to the `meals` array, this time using the push() function, log the variable to the console

let arrMealsV4 = ['kebab', 'pizza', 'burger'];
arrMealsV4.push('cereal');
console.log(arrMealsV4);

// 6 - create a variable `breakfast` and find the position of `cereal` in the `meals` array
// use the indexOf() function - log the result to the console

let arrMealsV5 = ['kebab', 'pizza', 'burger'];
arrMealsV5.push('cereal');
let breakfast = arrMealsV5.indexOf('cereal');
console.log(breakfast);
console.log(arrMealsV5[breakfast]);

/* CHALLENGE :: TIPJAR */
// 7 - create an array `tipjar` that will contain all our tips, add the following tips: 1, 5, 2, 2, 1

let arrTipjar = [1,5,2,2,1];

// 8 - create a function `tip` that will add a tip to the `tipjar` array
// the function should take a parameter `amount` and add it to the `tipjar` array via `push()`

function tip(amount) {
  arrTipjar.push(amount);
}

// 9 - call the function with a tip amount of 2 and log the `tipjar` array to the console

tip(2);
console.log(arrTipjar);

// 10 - create a function `total` that will calculate the total amount of the `tipjar` array
// use a loop to iterate over the array and add the values together, the function should return the result
//log the total value of the tips to the console

function total() {
  let totalAmount = 0;
  for (let i = 0; i < arrTipjar.length; i++) {
    totalAmount += arrTipjar[i];
  }
  return totalAmount;
}
console.log(total());
