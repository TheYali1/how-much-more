document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo-image");
    let isDefaultImage = true; // מעקב אחרי מצב הלוגו

    logo.addEventListener("click", () => {
        // התכווצות הלוגו עם אפקט circ
        logo.classList.add("shrink");

        // שינוי התמונה והחזרת הלוגו עם אפקט back
        setTimeout(() => {
            if (isDefaultImage) {
                logo.src = "how much more e.png"; // החלף לכתובת התמונה החדשה
            } else {
                logo.src = "how much more.png"; // חזרה לתמונה המקורית
            }
            isDefaultImage = !isDefaultImage; // הפיכת המצב
            logo.classList.remove("shrink");
            logo.classList.add("grow");
        }, 500);

        // הסרת המחלקה 'grow' לאחר שהאפקט הסתיים
        setTimeout(() => {
            logo.classList.remove("grow");
        }, 1000);
    });
});

// Smooth scrolling animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
