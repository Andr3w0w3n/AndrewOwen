const letters = document.querySelectorAll(".letter");
const links = document.querySelectorAll(".link");
const last_name = document.getElementById("owen");

letters.forEach((letter) => {
    if (letter.id != "R"){
        letter.addEventListener("click", function () {
            const targetURL = letter.getAttribute("data-url");
            
            window.location.href = targetURL;
        });
    }
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

document.getElementById("R").addEventListener("click", function() {
    window.open("./Documents/William A. Owen - Resume.pdf", "_blank");
});


function letterAnimation() {
    const animatedElements = document.querySelectorAll(".letter");

    
    animatedElements.forEach((letter) => {
        // Apply the animation
        letter.style.animation = "borderGrowShrink 1.5s infinite alternate";

        // Wait for 2 seconds (2000 milliseconds) and then remove the animation for this specific letter
        setTimeout(function() {
            letter.style.animation = "none"; // Remove the animation for this letter
        }, 1500);
    });
}

// Start the animation on page load
letterAnimation();

// Schedule the animation to repeat every 5 seconds
setInterval(letterAnimation, 5000);

// Randomly generate translation values between -25px and 25px for both X and Y axes
function getRandomTranslation() {
    const minX = -25;
    const maxX = 25;
    const minY = -25;
    const maxY = 25;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    return `translate(${randomX}px, ${randomY}px)`;
}

// Randomly generate a rotation value between -180deg and 180deg
function getRandomRotation() {
    const minRotation = -180;
    const maxRotation = 180;

    const randomRotation = Math.random() * (maxRotation - minRotation) + minRotation;

    return `rotate(${randomRotation}deg)`;
}

const circles = document.querySelectorAll(".circle");

function floatCircle() {
    circles.forEach((circle)=>{
        const randomTranslation = getRandomTranslation();
        // const randomRotation = getRandomRotation();

        // whiteCircle.style.transform = `${randomTranslation} ${randomRotation}`;
        circle.style.transform = `${randomTranslation}`;

        // Call the function again after a delay to create continuous animation
        
    })
    // requestAnimationFrame(floatCircle);
}

// Start the animation
floatCircle();


