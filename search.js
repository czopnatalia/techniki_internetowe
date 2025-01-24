function searchRecipe() {
    const searchInput = document.getElementById("searchInput").value.trim(); // pobieramy wpisane słowo
    if (searchInput) {
        // przekierowanie na stronę filtrowania z parametrem wyszukiwania
        window.location.href = `strona_filtrowania.html?search=${encodeURIComponent(searchInput)}`;
    } else {
        alert("Wpisz słowo kluczowe przed wyszukiwaniem.");
    }
}
