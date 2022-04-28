console.log("***** Object Practice *****");

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
let me = {
  firstName: "John",
  lastName: "Maras",
  shoeCount: 8,
  hasSiblings: true,
  favThreeFoods: ["dumplings", "shrimp", "spaghetti"],

  // TODO - add properties here
};
console.log("A little about me:", me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`;
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(me.favThreeFoods[0]);
console.log(me.favThreeFoods[me.favThreeFoods.length - 1]);
// I want to access three fav foods and then I'm giving and index. It's checking through that and the minus one starts me at the end

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(me.shoeCount);
me.shoeCount = me.shoeCount + 1;

/* me.shoeCount += 1;
This is a shorthand version that is doing the shoecount plus and equal to one more
*/

// i want the value of me.shoecount to equal that plus 1
console.log(me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = "plum";
console.log(me.favoriteColor);
