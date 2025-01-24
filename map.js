document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map').setView([50.0619474, 19.9368564], 17); // współrzędne dla Rynku w KRakowie

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([50.0619474, 19.9368564]).addTo(map)
        .openPopup();
});
