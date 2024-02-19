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


function aniTextIn(container){
    var movementDis = (container.find(".letter").width()+container.find(".animated-text").width())/2;
    container.find(".animated-text").stop().animate({opacity: 1}, 1000);
    container.stop().animate({ marginRight: movementDis*1.5 + 'px'}, 300);
}


function aniTextOut(container){
    container.find(".animated-text").stop().animate({opacity: 0}, 200);
    container.stop().animate({ marginRight:'0px'}, 300);
}


// Add click event listeners to letter containers
letterContainers.forEach((container) => {
    var letter = $(container).find(".letter");
    var animatedText = $(container).find(".animated-text");

    // animatedText.css({
    //      left: letter.width()+1+"px"
    // });

    if (letter && animatedText) {
        $(container).hover(function () {
                aniTextIn($(container));
            },
            function(){
                aniTextOut($(container));
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


// Base functions for page
// Loads with letters open so user can see what they are
function onLoad() {
    // disgusting regex I found @ https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    // for checking if user is using a mobile device
    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };

    letterContainers.forEach((container) => {
        aniTextIn($(container));
    });

    if(window.mobileAndTabletCheck){
        setTimeout(function () {
            letterContainers.forEach((container) => {
                aniTextOut($(container));
            });
        }, 5000);
    }
}
