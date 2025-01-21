document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category"); // Pobierz kategorię z URL

    if (category) {
        console.log("Wybrana kategoria:", category); // Debugowanie
        applyCategoryFilter(category); // Filtrowanie na podstawie kategorii
    } else {
        displayAllRecipes(); // Jeśli brak kategorii, pokaż wszystkie przepisy
    }
});

function applyCategoryFilter(category) {
    // Normalizacja kategorii (ignorowanie wielkości liter)
    const normalizedCategory = category.toLowerCase();

    const filteredRecipes = Object.values(window.recipes || {}).filter(recipe => {
        // Dopasowanie tagów przepisu do kategorii
        return recipe.tags.some(tag => tag.toLowerCase() === normalizedCategory);
    });

    console.log("Filtrowane przepisy:", filteredRecipes); // Debugowanie
    renderRecipes(filteredRecipes);
}

function displayAllRecipes() {
    const allRecipes = Object.values(window.recipes || {});
    renderRecipes(allRecipes);
}

function renderRecipes(recipes) {
    const recipeContainer = document.getElementById("recipe-container");
    if (!recipeContainer) {
        console.error("Element o ID 'recipe-container' nie został znaleziony.");
        return;
    }

    if (recipes.length > 0) {
        recipeContainer.innerHTML = recipes
            .map(recipe => `
                <div class="recipe-card">
                    <a href="strona_szczegolowa.html?id=${encodeURIComponent(recipe.title.toLowerCase().replace(/\s+/g, "-"))}">
                        <img src="${recipe.image}" alt="${recipe.title}" />
                        <h3>${recipe.title}</h3>
                    </a>
                </div>
            `)
            .join("");
    } else {
        recipeContainer.innerHTML = "<p>Nie znaleziono przepisów dla wybranej kategorii.</p>";
    }
}
