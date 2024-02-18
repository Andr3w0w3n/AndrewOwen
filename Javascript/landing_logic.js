const letterContainers = document.querySelectorAll(".letter-container");
const links = document.querySelectorAll(".link");
const lastName = document.getElementById("owen");
const letterAnimationInterval = 5000; // Animation interval in milliseconds

// Function to handle letter click events
function handleLetterClick(container) {
    if (!container.querySelector(".letter.R")) {
        const targetURL = container.getAttribute("data-url");
        window.location.href = targetURL;
    } else {
        const targetURL = container.getAttribute("data-url");
        window.open(targetURL, "_blank"); // Use window.open to open in a new tab/window
    }
}


// Add click event listeners to letter containers
letterContainers.forEach((container) => {
    var letter = $(container).find(".letter");
    var animatedText = $(container).find(".animated-text");

    animatedText.css({
         left: letter.width()+1+"px"
    });

    if (letter && animatedText) {
        const movementDis = (letter.width()+animatedText.width())/2;

        $(container).hover(function () {
                $(this).find(".animated-text").stop().fadeIn(1000);
                $(this).stop().animate({ marginRight: movementDis + 'px'}, 300);
            },
            function(){
                $(this).find(".animated-text").stop().fadeOut(500)
                $(this).stop().animate({ marginRight:'0px'}, 300);
            }
        );
    }

    $(container).click(function (e) { 
        e.preventDefault();
        handleLetterClick(container);
    });
});

// Add transition to links
links.forEach((link) => {
    link.style.transition = "transform 0.1s ease-in-out";
});

// Add transition to last name
lastName.style.transition = "transform 0.1s ease-in-out";

// Function to handle mousemove event
function handleMouseMove(event) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = (centerX - mouseX) / 50;
    const deltaY = (centerY - mouseY) / 50;

    letterContainers.forEach((container) => {
        if (!container.matches(":hover")) {
            container.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        }
    });

    links.forEach((link) => {
        if (!link.matches(":hover")) {
            link.style.transform = `translate(${deltaX + 5}px, ${deltaY + 5}px)`;
        }
    });

    lastName.style.transform = `translate(${deltaX / 1.25}px, ${deltaY / 1.25}px)`;
}

// Function to reset transformations on mouseout
function resetTransformations() {
    letterContainers.forEach((container) => {
        container.style.transform = "translate(0, 0)";
    });

    links.forEach((link) => {
        link.style.transform = "translate(0, 0)";
    });

    lastName.style.transform = "translate(0, 0)";
}

// Add mousemove and mouseout event listeners to the window
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("mouseout", resetTransformations);

// Function to apply the letter animation
function applyLetterAnimation() {
    letterContainers.forEach((container) => {
        const letter = container.querySelector(".letter");
        if (letter) {
            letter.style.animation = "borderGrowShrink 1.5s infinite alternate";

            setTimeout(() => {
                letter.style.animation = "none";
            }, 1500);
        }
    });
}

// Apply the letter animation on page load
applyLetterAnimation();

// Schedule the animation to repeat at regular intervals
setInterval(applyLetterAnimation, letterAnimationInterval);

// Function to generate random translation values
function getRandomTranslation() {
    const minX = -25;
    const maxX = 25;
    const minY = -25;
    const maxY = 25;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    return `translate(${randomX}px, ${randomY}px)`;
}
