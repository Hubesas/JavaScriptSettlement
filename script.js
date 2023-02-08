const buttons = document.querySelectorAll(`button`)
const inputs = document.querySelectorAll(`input`)
const recipePreview = document.querySelector(`#preview`)
const error = document.querySelector(`#error`)
let recipe = []
let ingrd = []
let allRecipes = []
let photo = ``

buttons[0].addEventListener(`click`, function () {

    ingrd.push(inputs[1].value)
    console.log(ingrd)
    inputs[1].value = ``
})

buttons[1].addEventListener(`click`, function () {

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            photo = data.meals[0].strMealThumb
        })

    recipe = {
        tilte: inputs[0].value,
        description: inputs[2].value,
        calories: inputs[3].value,
        ingredients: ingrd,
        image: photo
    }
    console.log(recipe)


    if (recipe.tilte.length === 0 || recipe.description === 0 || recipe.calories === 0 || recipe.ingredients.length < 3) {
        error.innerText = `Tilte, Description and Calories Can't Be Empty
         Also Recipe should have at least 3 ingredients
        `
    } else {
        error.innerText = ``
        recipePreview.innerHTML = ``

        recipePreview.innerHTML = `
            <div class="row">
                <div class="col"><img src="${recipe.image}" alt=""></div>
                <div class="col">
                        <h5>${recipe.tilte}</h5>
                        <p>Description: ${recipe.description}</p>
                    </div>
            </div>
            <div class="row">
            <p>${recipe.ingredients}</p>
            <p>Calories: ${recipe.calories}</p>
            </div>
            `
    }

})




buttons[2].addEventListener(`click`, function () {
    allRecipes.push(recipe)
    console.log(allRecipes)
    ingrd = []
    recipe = {}
    inputs[0].value = ``
    inputs[2].value = ``
    inputs[3].value = ``
    localStorage.setItem(`recipe`, JSON.stringify(allRecipes))
})


