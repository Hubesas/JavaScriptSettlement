const buttons = document.querySelectorAll(`button`)
const inputs = document.querySelectorAll(`input`)
const recipePreview = document.querySelector(`#preview`)
const error = document.querySelector(`#error`)
let recipe = []
let ingrd = []
let allRecipes = []
let photo = ``

buttons[0].addEventListener(`click`, function () {

    ingrd.push(inputs[1].value.toLowerCase())
    console.log(ingrd)
    inputs[1].value = ``
})

buttons[1].addEventListener(`click`, function () {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            photo = data.meals[0].strMealThumb

            recipePreview.innerHTML = `
        <div class= "row">
                <div class="col">
                <img src="${data.meals[0].strMealThumb}" alt="">
                </div>
        </div>
        `

        })


})

buttons[2].addEventListener(`click`, function () {

    recipe = {
        tilte: inputs[0].value.toLowerCase(),
        description: inputs[2].value.toLowerCase(),
        calories: inputs[3].value,
        ingredients: ingrd,
        image: photo
    }

    if (recipe.tilte.length === 0 || recipe.description === 0 || recipe.calories === 0 || recipe.ingredients.length < 3) {
        error.innerText = `Tilte, Description and Calories Can't Be Empty Also Recipe should have at least 3 ingredients
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
            <p>${recipe.ingredients.join(`, `)}</p>
            <p>Calories: ${recipe.calories}</p>
            </div>
            `
    }

})



buttons[3].addEventListener(`click`, function () {

    let allRecipes = localStorage.getItem("recipe");

    if (allRecipes) {
        allRecipes = JSON.parse(allRecipes);
        allRecipes.push(recipe)
        localStorage.setItem("recipe", JSON.stringify(allRecipes));
    } else {
        allRecipes.push(recipe)
        localStorage.setItem("recipe", JSON.stringify(allRecipes));
    }


    ingrd = []
    recipe = {}
    inputs[0].value = ``
    inputs[2].value = ``
    inputs[3].value = ``

    // localStorage.setItem(`recipe`, JSON.stringify(allRecipes))
})


