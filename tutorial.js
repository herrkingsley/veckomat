const popupTut = document.getElementById('tutorial');
const classNames = "slide";
let slides = ["1", "2", "3"]
let currentSlide = 0;
let tutorial = document.getElementsByClassName(classNames + slides[currentSlide]);
let newUser;

if (localStorage.length === 0) {
    popupTut.style.display = "flex";
    }
    else {
        console.log("this is not empty")
    }


function closeTut() {
    popupTut.style.display = "none";
}

function nextTut() {
    if (currentSlide <= 1) {
        document.getElementsByClassName(classNames + slides[currentSlide])[0].style.display = "none"
        currentSlide += 1;
        console.log(currentSlide);
        document.getElementsByClassName(classNames + slides[currentSlide])[0].style.display = "flex"
    } else {
        console.log("reset current slide")
        closeTut();
    }
}
