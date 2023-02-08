const inputs = document.querySelectorAll(`input`)
const buttons = document.querySelectorAll(`button`)
const recipesList = document.querySelector(`#recipesList`)
let allRecipes = []
let recipes = JSON.parse(localStorage.getItem(`recipe`))
allRecipes.push(recipes)
console.log(allRecipes[0])
console.log(allRecipes[0][0])
appendRecipes()
function appendRecipes () {

    recipesList.innerHTML = ``
    allRecipes[0].forEach(item => {
        recipesList.innerHTML += `
         <div class="box m-2 border border-danger p-4">
         <div class="row">
                <img src="${item[0].image}" alt="">
         </div>
         <div class="row">
                <h4 style="text-align: center" >${item[0].tilte}</h4>
                <p>Description: ${item[0].description}</p>
                <p>Ingredients: ${item[0].ingredients}</p>
                <p>Calories: ${item[0].calories}</p>
         </div>
            </div>
        `
        }
    )
}

buttons[0].addEventListener(`click`, function () {
    const values = {
        title:inputs[0].value,
        calories: Number(inputs[1].value),
        ingredients: inputs[2].value
    }
    let results = allRecipes[0]
    console.log(results)
    if (values.title) results = results.filter(recipe => recipe.title === recipe.title)
    if (values.calories) results = results.filter(recipe => recipe.calories === recipe.calories)
    if (values.ingredients) results = results.filter(recipe => recipe.ingredients === recipe.ingredients)
    console.log(results)
})
