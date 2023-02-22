// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

//pseudo:
//  get array of keys for recipe
//  loop through array of keys:
//   divide value of each key for available by value for same key in recipe
//   keep running max, compare output for division for each key decreasing if current is lest than running
//  (deal with missing key in available = equivalent of .get() in python; careful with throwing error)



function cakes(recipe, available) {
    let ingredients = Object.keys(recipe)
    // ingredients = [ 'flour', 'sugar', 'eggs' ];
    let available_amount = 0;
    let recipe_amount = 0
    let temp_quant = 0
    let list_quants = []
    for (let i = 0; i < ingredients.length; i++){
        available_amount = available[ingredients[i]];
        // console.log(`This is the available amount for ${ingredients[i]}: ${available_amount}`)
        if (available_amount === undefined){
            return 0
        }
        recipe_amount = recipe[ingredients[i]];
        // console.log(`This is the available amount for ${ingredients[i]}: ${recipe_amount}`)
        temp_quant = available_amount / recipe_amount;
        list_quants.push(temp_quant)
    }
    return Math.floor(Math.min(...list_quants))
  }

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {milk: 200}))