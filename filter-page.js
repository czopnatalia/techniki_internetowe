document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category"); // Pobierz kategorię z URL

    if (category) {
        applyCategoryFilter(category); // Filtrowanie na podstawie kategorii
    } else {
        displayAllRecipes(); // Jeśli brak kategorii, pokaż wszystkie przepisy
    }
});

function applyCategoryFilter(category) {
    // Dopasowanie tagów do kategorii, usuwając prefiks "kuchnia-"
    const normalizedCategory = category.replace("kuchnia-", "").toLowerCase();

    const filteredRecipes = Object.values(window.recipes || {}).filter(recipe => {
        return recipe.tags.some(tag => tag.toLowerCase() === normalizedCategory);
    });

    const recipeContainer = document.getElementById("recipe-container");
    if (!recipeContainer) {
        console.error("Element o ID 'recipe-container' nie został znaleziony.");
        return;
    }

    if (filteredRecipes.length > 0) {
        recipeContainer.innerHTML = filteredRecipes
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

function displayAllRecipes() {
    const recipeContainer = document.getElementById("recipe-container");
    if (!recipeContainer) {
        console.error("Element o ID 'recipe-container' nie został znaleziony.");
        return;
    }

    // Wyświetl wszystkie przepisy
    recipeContainer.innerHTML = Object.values(window.recipes || {})
        .map(recipe => `
            <div class="recipe-card">
                <a href="strona_szczegolowa.html?id=${encodeURIComponent(recipe.title.toLowerCase().replace(/\s+/g, "-"))}">
                    <img src="${recipe.image}" alt="${recipe.title}" />
                    <h3>${recipe.title}</h3>
                </a>
            </div>
        `)
        .join("");
}
