const letters = document.querySelectorAll(".letter");
const links = document.querySelectorAll(".link");
const last_name = document.getElementById("owen");

letters.forEach((letter) => {
    letter.addEventListener("click", function () {
        const targetURL = letter.getAttribute("data-url");
        
        window.location.href = targetURL;
    });
});

letters.forEach((letter) => {
    letter.style.transition = "transform 0.1s ease-in-out";
});

links.forEach((link) => {
    link.style.transition = "transform 0.1s ease-in-out";
});

last_name.style.transition = "Trasnsform 0.1s easy-in-out";

window.addEventListener("mousemove", (event) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = (centerX - mouseX) / 50; // Adjust the divisor for sensitivity
    const deltaY = (centerY - mouseY) / 50; // Adjust the divisor for sensitivity

    letters.forEach((letter) => {
        if (!letter.matches(":hover")) {
            letter.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }
    });

    links.forEach((link) => {
        if (!link.matches(":hover")) {
            link.style.transform = `translate(${deltaX+5}px, ${deltaY+5}px)`;
        }
    });

    last_name.style.transform = `translate(${deltaX/1.25}px, ${deltaY/1.25}px)`;
});

window.addEventListener("mouseout", () => {
    letters.forEach((letter) => {
        letter.style.transform = "translate(0, 0)";
    });
    
    links.forEach((link) => {
        link.style.transform = "translate(0, 0)";
    });

    last_name.style.transform = "translate(0, 0)";
});
