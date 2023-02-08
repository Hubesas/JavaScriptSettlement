const inputs = document.querySelectorAll(`input`)
const buttons = document.querySelectorAll(`button`)
const recipesList = document.querySelector(`#recipesList`)
let allRecipes = []
let recipes = JSON.parse(localStorage.getItem(`recipe`))

allRecipes.push(recipes)
appendRecipes(allRecipes)
function appendRecipes () {

    recipesList.innerHTML = ``
    recipes.forEach(item => {
        recipesList.innerHTML += `
         <div class="box m-2 border border-danger p-4">
         <div class="row">
                <img src="${item.image}" alt="">
         </div>
         <div class="row">
                <h4 style="text-align: center" >${item.tilte}</h4>
                <p>Description: ${item.description}</p>
                <p>Ingredients: ${item.ingredients}</p>
                <p>Calories: ${item.calories}</p>
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

    let results = allRecipes
    console.log(results)
    if (values.title) results = results.filter(recipe => recipe.title === recipe.title)
    if (values.calories) results = results.filter(recipe => recipe.calories === recipe.calories)
    if (values.ingredients) results = results.filter(recipe => recipe.ingredients === recipe.ingredients)

})
