var slideList = 1;
displaySlides(slideList);

function moveSlides(a) {
    displaySlides(slideList += a);
}

function thisSlide(a) {
    displaySlides(slideList = a);
}

function displaySlides(a) {
    var b;
    var frames = document.getElementsByClassName("frames");
    var circles = document.getElementsByClassName("circles");
    if (a > frames.length) {
        slideList = 1
    }
    if (a < 1) {
        slideList = frames.length
    }
    for (b = 0; b < frames.length; b++) {
        frames[b].style.display = "none";
    }
    for (b = 0; b < circles.length; b++) {
        circles[b].className = circles[b].className.replace(" active", "");
    }
    frames[slideList - 1].style.display = "block";
    circles[slideList - 1].className += " active";
}
