/*
  __   ____  ____   __   _  _  ____ 
 / _\ (  _ \(  _ \ / _\ ( \/ )/ ___)
/    \ )   / )   //    \ )  / \___ \
\_/\_/(__\_)(__\_)\_/\_/(__/  (____/
*/

/*

*/

// TODO: 1 — create an array `meals` with three of your favorite meals and log it to the console
// let arrMeals = ['kebab', 'pizza', 'burger'];
// console.log(arrMeals);

// TODO: 2 — create an array `drinks` with three of your favorite drinks and log it to the console
// let arrDrinks = ['cola', 'fanta', 'ice tea'];
// console.log(arrDrinks);

// TODO: 3 - create a variable `lastmeal` that stores the last item from the `meals` array
// ? hint: use the pop() function - log the result to the console
// let arrMeals = ['kebab', 'pizza', 'burger'];
// let lastmeal = arrMeals.pop();
// console.log(lastmeal);

// TODO: 4 - loop over the meals array and print each meal to the console
// let arrMeals = ['kebab', 'pizza', 'burger'];
// for (let meal = 0; meal < arrMeals.length; meal ++) {
//   console.log(arrMeals[meal]);
// }

// TODO: 5 - add a meal called `cereal` to the `meals` array, this time using the push() function, log the variable to the console
// let arrMeals = ['kebab', 'pizza', 'burger'];
// arrMeals.push('cereal');
// console.log(arrMeals);

// TODO: 6 - create a variable `breakfast` and find the position of `cereal` in the `meals` array
// ? hint: use the indexOf() function - log the result to the console
// let arrMeals = ['kebab', 'pizza', 'burger'];
// arrMeals.push('cereal');
// let breakfast = arrMeals.indexOf('cereal');
// console.log(breakfast);
// console.log(arrMeals[breakfast]);

/* CHALLENGE :: TIPJAR */
// TODO: 7 - create an array `tipjar` that will contain all our tips, add the following tips: 1, 5, 2, 2, 1
let arrTipjar = [1,5,2,2,1];

// TODO: 8 - create a function `tip` that will add a tip to the `tipjar` array
// ? hint: the function should take a parameter `amount` and add it to the `tipjar` array via `push()`
function tip(amount) {
  arrTipjar.push(amount);
}

// TODO: 9 - call the function with a tip amount of 2 and log the `tipjar` array to the console
tip(2);
console.log(arrTipjar);

// TODO: 10 - create a function `total` that will calculate the total amount of the `tipjar` array
// ? hint: use a loop to iterate over the array and add the values together, the function should return the result
// ? log the total value of the tips to the console
function total() {
  let totalAmount = 0;
  for (let i = 0; i < arrTipjar.length; i++) {
    totalAmount += arrTipjar[i];
  }
  return totalAmount;
}
console.log(total());
