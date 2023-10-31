document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentIndex = 0;
    let intervalId;

    function startCarousel() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % carousel.children.length;
            updateCarousel();
        }, 4000); // Mude de imagem a cada 5 segundos (ajuste o valor conforme necessário)
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    /* prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        updateCarousel();
        stopCarousel();
        startCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        updateCarousel();
        stopCarousel();
        startCarousel();
    }); */

    function updateCarousel() {
        const translateValue = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateValue}%)`;
    }

    startCarousel(); // Iniciar o carrossel automaticamente
});
