const buttons = document.querySelectorAll(`button`)
const inputs = document.querySelectorAll(`input`)
const recipePreview = document.querySelector(`#preview`)
const error = document.querySelector(`#error`)
let recipe = []
let ingrd = []
let allRecipes = []
let photo = []

buttons[0].addEventListener(`click`, function () {

    ingrd.push(inputs[1].value)
    inputs[1].value = ``
})

buttons[1].addEventListener(`click`, function () {

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            photo = data.meals[0].strMealThumb
        })

    recipe = [{
        tilte: inputs[0].value,
        description: inputs[2].value,
        calories: inputs[3].value,
        ingredients: ingrd,
        image: photo
    }]


    if (recipe[0].tilte.length === 0 || recipe[0].description === 0 || recipe[0].calories === 0 || recipe[0].ingredients.length < 3) {
        error.innerText = `Tilte, Description and Calories Can't Be Empty
    //     Also Recipe should have at least 3 ingredients
    //     `
    } else {
        error.innerText = ``
        recipePreview.innerHTML = ``

        recipePreview.innerHTML = `
            <div class="row">
                <div class="col"><img src="${recipe[0].image}" alt=""></div>
                <div class="col">
                        <h5>${recipe[0].tilte}</h5>
                        <p>Description: ${recipe[0].description}</p>
                    </div>
            </div>
            <div class="row">
            <p>${recipe[0].ingredients}</p>
            <p>Calories: ${recipe[0].calories}</p>
            </div>
            `
    }

})




buttons[2].addEventListener(`click`, function () {
    allRecipes.push(recipe)
    ingrd = []
    recipe = []
    inputs[0].value = ``
    inputs[2].value = ``
    inputs[3].value = ``
    localStorage.setItem(`recipe`, JSON.stringify(allRecipes))
})


