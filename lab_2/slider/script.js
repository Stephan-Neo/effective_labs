function initSlider() {
    if (!localStorage.getItem("indexActiveCard")) {
        localStorage.setItem("indexActiveCard", JSON.stringify(0));
        displaySlides();
    }

    displaySlides();
    keyListener();
    intervalSkip();
}

function displaySlides() {
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;
    let indexActiveCard = localStorage.getItem("indexActiveCard")

    for (i = 0; i < numberSlides; i++) {
        slides[i].classList.remove("display");
    }

    slides[indexActiveCard].classList.add("display");
}

function skipForward() {
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;
    let indexActiveCard = localStorage.getItem("indexActiveCard")

    if (indexActiveCard == numberSlides - 1) {
        indexActiveCard = 0;
        localStorage.setItem("indexActiveCard", JSON.stringify(indexActiveCard));
        displaySlides();
        return;
    }
    indexActiveCard++;
    localStorage.setItem("indexActiveCard", JSON.stringify(indexActiveCard));
    displaySlides();
}

function skipBack() {
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;
    let indexActiveCard = localStorage.getItem("indexActiveCard")

    if (indexActiveCard == 0) {
        indexActiveCard = numberSlides - 1;
        localStorage.setItem("indexActiveCard", JSON.stringify(indexActiveCard));
        displaySlides();
        return;
    }
    indexActiveCard--;
    localStorage.setItem("indexActiveCard", JSON.stringify(indexActiveCard));
    displaySlides();
}

function keyListener() {
    document.addEventListener('keydown', function (event) {
        if (event.code == "ArrowRight") {
            skipForward();
        }

        if (event.code == "Space") {
            skipForward();
        }

        if (event.code == "ArrowLeft") {
            skipBack();
        }
    });
}

function intervalSkip() {
    let leftArrow = document.querySelector(".left_arrow");
    let rightArrow = document.querySelector(".right_arrow");
    let interval = 3000;

    let intervalTime = setInterval(skipForward, interval);

    leftArrow.addEventListener('click', function (e) {
        clearInterval(intervalTime);
        intervalTime = setInterval(skipForward, interval);
    });

    rightArrow.addEventListener('click', function (e) {
        clearInterval(intervalTime);
        intervalTime = setInterval(skipForward, interval);
    });

    document.addEventListener('keydown', function (event) {
        if (event.code == "ArrowRight") {
            clearInterval(intervalTime);
            intervalTime = setInterval(skipForward, interval);
        }

        if (event.code == "Space") {
            clearInterval(intervalTime);
            intervalTime = setInterval(skipForward, interval);
        }

        if (event.code == "ArrowLeft") {
            clearInterval(intervalTime);
            intervalTime = setInterval(skipForward, interval);
        }
    });
}

initSlider();


