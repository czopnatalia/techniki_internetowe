const keywords = [];

//funkcja dodawania słowa kluczowego
function addKeyword() {
    const input = document.getElementById("keywordInput");
    if (!input) {
        console.error("Element input o ID 'keywordInput' nie został znaleziony.");
        return;
    }

    const keyword = input.value.trim().toLowerCase();

    if (keyword && !keywords.includes(keyword)) {
        keywords.push(keyword);
        displayKeywords();
        input.value = ""; // czyści pole po dodaniu
    } else {
        alert(keyword ? "To słowo kluczowe już zostało dodane." : "Proszę wpisać unikalne słowo kluczowe.");
    }
}

//funckja wyświetlania słów kluczowych
function displayKeywords() {
    const keywordList = document.getElementById("KeywordListDisplay");
    if (!keywordList) {
        console.error("Element o ID 'KeywordListDisplay' nie został znaleziony.");
        return;
    }

    keywordList.innerHTML = keywords
        .map((keyword, index) => `
            <div class="keyword-item">
                ${keyword}
                <button onclick="removeKeyword(${index})">×</button>
            </div>
        `)
        .join("");
}

//funkcja usuwania słowa kluczowego
function removeKeyword(index) {
    if (index >= 0 && index < keywords.length) {
        keywords.splice(index, 1);
        displayKeywords();
        applyFilters(); // przywraca filtrowanie po usunięciu słowa kluczowego
    } else {
        console.error("Nieprawidłowy indeks słowa kluczowego.");
    }
}

//!!!funkcja filtrowania i dynamicznego renderowania przepisów!!!
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
        const matchesKeywords = keywords.length === 0 || keywords.some(keyword => recipe.title.toLowerCase().includes(keyword));
        return matchesTime && matchesDifficulty && matchesCost && matchesKeywords;
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

//funkcja filtrowania widocznych elementów na podstawie atrybutów `data-filters`
function filterRecipes() {
    const activeFilters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.getAttribute('data-filter'));

    document.querySelectorAll('.recipe-card').forEach(card => {
        const cardFilters = card.getAttribute('data-filters').split(' ');
        const matches = activeFilters.every(filter => cardFilters.includes(filter));
        card.style.display = matches ? 'block' : 'none';
    });
}


//inicjalizacja zdarzeń
document.addEventListener("DOMContentLoaded", () => {
    //obsługa przycisku dodawania słowa kluczowego
    const addKeywordButton = document.getElementById("addKeywordBtn");
    if (addKeywordButton) {
        addKeywordButton.addEventListener("click", addKeyword);
    } else {
        console.error("Element o ID 'addKeywordBtn' nie został znaleziony.");
    }

    // obsługa przycisku "Filtruj"
    const filterButton = document.getElementById("filterBtn");
    if (filterButton) {
        filterButton.addEventListener("click", applyFilters);
    } else {
        console.error("Element o ID 'filterBtn' nie został znaleziony.");
    }

    // obsługa checkboxów
    const filterInputs = document.querySelectorAll('input[type="checkbox"]');
    if (filterInputs.length > 0) {
        filterInputs.forEach(input => {
            input.addEventListener("change", applyFilters);
        });
    } else {
        console.warn("Nie znaleziono żadnych checkboxów do obsługi filtrów.");
    }

    // inicjlane zastosowanie filtrów przy załadowaniu strony
    applyFilters();
});
