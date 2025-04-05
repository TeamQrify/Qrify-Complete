document.addEventListener("DOMContentLoaded", function () {
    let collectionCards = document.querySelectorAll(".collection-card");

    collectionCards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
