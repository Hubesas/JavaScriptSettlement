const inputs = document.querySelectorAll(`input`)
const buttons = document.querySelectorAll(`button`)
const recipesList = document.querySelector(`#recipesList`)
const allRecipes = JSON.parse(localStorage.getItem(`recipe`))


appendRecipes(allRecipes)
function appendRecipes (recipes) {

    recipesList.innerHTML = ``
    recipes.forEach(item => {
        recipesList.innerHTML += `
         <div class="box  m-2 border border-danger p-4">
         <div class="row justify-content-center">
                <img src="${item.image}" alt="">
         </div>
         <div class="row ">
                <h4 style="text-align: center" >${item.tilte}</h4>
                <p>Description: ${item.description}</p>
                <p>Ingredients: ${item.ingredients.join(`, `)}</p>
                <p>Calories: ${item.calories}</p>
         </div>
            </div>
        `
        }
    )
}

buttons[0].addEventListener(`click`, function () {
    let results = allRecipes
    if (inputs[0].value) results = results.filter(recipe => recipe.tilte === inputs[0].value.toLowerCase())
    if (Number(inputs[1].value)) results = results.filter(recipe => Number(recipe.calories) === Number(inputs[1].value))
    if (inputs[2].value) results = results.filter(recipe => recipe.ingredients.includes(inputs[2].value.toLowerCase()))
    appendRecipes(results)
})
