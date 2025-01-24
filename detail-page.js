document.addEventListener("DOMContentLoaded", () => {
    const recipes = window.recipes; // globalny obiekt recipes!!
    
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get("id");

    if (recipes[recipeId]) {
        const recipe = recipes[recipeId];

        document.getElementById("recipe-title").textContent = recipe.title;
        document.getElementById("recipe-time").textContent = recipe.time;
        document.getElementById("recipe-portions").textContent = recipe.portions;
        document.getElementById("recipe-image").src = recipe.image;

        const tagsContainer = document.getElementById("recipe-tags");
        tagsContainer.innerHTML = recipe.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("");

        const ingredientsList = document.getElementById("ingredients-list");
        ingredientsList.innerHTML = recipe.ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("");

        const instructionsList = document.getElementById("instructions-list");
        instructionsList.innerHTML = recipe.instructions
            .map((step) => `<li>${step}</li>`)
            .join("");

        const recipeBody = document.querySelector(".recipe-body");
        recipeBody.classList.add("hidden");

        const showRecipeBtn = document.querySelector(".show-recipe-btn");
        showRecipeBtn.addEventListener("click", () => {
            recipeBody.classList.toggle("hidden");
            showRecipeBtn.textContent = recipeBody.classList.contains("hidden")
                ? "Pokaż przepis"
                : "Ukryj przepis";
        });
    } else {
        document.body.innerHTML = "<p>Nie znaleziono przepisu.</p>";
    }
});