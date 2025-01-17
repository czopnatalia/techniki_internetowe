function filterRecipes() {
    const activeFilters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.getAttribute('data-filter'));

    document.querySelectorAll('.recipe-card').forEach(card => {
        const cardFilters = card.getAttribute('data-filters').split(' ');
        const matches = activeFilters.every(filter => cardFilters.includes(filter));
        card.style.display = matches ? 'block' : 'none';
    });
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', filterRecipes);
});

