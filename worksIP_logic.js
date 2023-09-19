const back_arrow = document.getElementById("back-arrow");

back_arrow.style.transition = "transform 0.1 ease-in-out";

window.addEventListener("mousemove", (event) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = (centerX - mouseX) / 50; // Adjust the divisor for sensitivity
    const deltaY = (centerY - mouseY) / 50; // Adjust the divisor for sensitivity
    
    back_arrow.style.transform = `translate(${deltaX/1.25}px, ${deltaY/1.25}px)`;
});

window.addEventListener("mouseout", () => {
    back_arrow.style.transform = "translate(0,0)";
});

back_arrow.addEventListener("click", function () {
    const homeURL = back_arrow.getAttribute("data-url");
    window.location.href = homeURL;
})