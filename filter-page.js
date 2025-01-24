document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category"); // pobiera kategorię z URL

    if (category) {
        console.log("Wybrana kategoria:", category); //debugowanie
        applyCategoryFilter(category); // Filtrowanie na podstawie kategorii
    } else {
        displayAllRecipes(); // jeśli brak kategorii, pokaż wszystkie przepisy
    }

    //Checkboxy i filtry
    const filterInputs = document.querySelectorAll('input[type="checkbox"]');
    if (filterInputs.length > 0) {
        filterInputs.forEach(input => {
            input.addEventListener("change", applyFilters);
        });
    }
});

function applyCategoryFilter(category) {
    // iignorowanie wielkości liter
    const normalizedCategory = category.toLowerCase();

    const filteredRecipes = Object.values(window.recipes || {}).filter(recipe => {
        // dopasowanie tagów przepisu do kategorii
        return recipe.tags.some(tag => tag.toLowerCase() === normalizedCategory);
    });

    console.log("Filtrowane przepisy:", filteredRecipes); // debugowanie
    renderRecipes(filteredRecipes);
}

function displayAllRecipes() {
    const allRecipes = Object.values(window.recipes || {});
    renderRecipes(allRecipes);
}

function applyFilters() {
    const selectedFilters = {
        time: Array.from(document.querySelectorAll('input[name="time"]:checked')).map(checkbox => checkbox.id),
        difficulty: Array.from(document.querySelectorAll('input[name="difficulty"]:checked')).map(checkbox => checkbox.id),
        cost: Array.from(document.querySelectorAll('input[name="cost"]:checked')).map(checkbox => checkbox.id),
    };

    const filteredRecipes = Object.values(window.recipes || {}).filter(recipe => {
        const matchesTime = selectedFilters.time.length === 0 || selectedFilters.time.includes(recipe.timeFilter);
        const matchesDifficulty = selectedFilters.difficulty.length === 0 || selectedFilters.difficulty.includes(recipe.difficultyFilter);
        const matchesCost = selectedFilters.cost.length === 0 || selectedFilters.cost.includes(recipe.costFilter);

        //przepis pasuje, jeśli spełnia dowolne z zaznaczonych kryteriów w każdej kategorii
        return matchesTime || matchesDifficulty || matchesCost;
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
        recipeContainer.innerHTML = "<p>Nie znaleziono przepisów pasujących do wybranych filtrów.</p>";
    }
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
