document.addEventListener("DOMContentLoaded", function () {
    // Add hover effect on restaurant cards
    let restaurantCards = document.querySelectorAll(".restaurant-card");

    restaurantCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });

    // Search feature
    document.getElementById("search-btn").addEventListener("click", function () {
        let searchQuery = document.getElementById("search-input").value.toLowerCase();
        restaurantCards.forEach((card) => {
            let name = card.querySelector("h3").innerText.toLowerCase();
            if (name.includes(searchQuery)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
