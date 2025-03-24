document.addEventListener("DOMContentLoaded", function () {
    const albumItems = document.querySelectorAll(".album-item");

    albumItems.forEach(item => {
        const title = item.querySelector(".album-title");
        const details = item.querySelector(".album-details");

        title.addEventListener("click", () => {
            details.style.display = details.style.display === "block" ? "none" : "block";
        });
    });
});