function initSlider(){
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;

    if(!localStorage.getItem("arrayCard")){
        let arrayCard = [];
        for(i = 0; i < numberSlides; i++){
            if(i == 0){
                arrayCard.push(1);
                slides[0].classList.add("display");
            }else{
                arrayCard.push(0);
            }
        }
        localStorage.setItem("arrayCard", JSON.stringify(arrayCard));
    }

    let getArrayCard = JSON.parse(localStorage.getItem("arrayCard"));

    let indexActiveCard;
    for(i = 0; i < numberSlides; i++){
        if(getArrayCard[i] != 0){
            indexActiveCard = i;
        };
    }

    slides[indexActiveCard].classList.add("display");

    keyListener();
    intervalSkip();
}

function displaySlides(){
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;
    let getArrayCard = JSON.parse(localStorage.getItem("arrayCard"));

    let indexActiveCard;
    for(i = 0; i < numberSlides; i++){
        if(getArrayCard[i] != 0){
            indexActiveCard = i;
        };
    }

    for(i = 0; i < numberSlides; i++){
        slides[i].classList.remove("display");
    }

    slides[indexActiveCard].classList.add("display");
}

function skipForward(){
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;
    let getArrayCard = JSON.parse(localStorage.getItem("arrayCard"));

    let indexActiveCard;
    for(i = 0; i < numberSlides; i++){
        if(getArrayCard[i] != 0){
            indexActiveCard = i;
        };
    }

    getArrayCard.fill(0);

    if(indexActiveCard == numberSlides - 1){
        getArrayCard[0] = 1;
        localStorage.setItem("arrayCard", JSON.stringify(getArrayCard));
        displaySlides();
    }

    else{
        getArrayCard[indexActiveCard + 1] = 1;
        localStorage.setItem("arrayCard", JSON.stringify(getArrayCard));
        displaySlides();
    }
}

function skipBack(){
    let slides = document.querySelectorAll(".card");
    let numberSlides = slides.length;
    let getArrayCard = JSON.parse(localStorage.getItem("arrayCard"));

    let indexActiveCard;
    for(i = 0; i < numberSlides; i++){
        if(getArrayCard[i] != 0){
            indexActiveCard = i;
        };
    }

    getArrayCard.fill(0);

    if(indexActiveCard == 0){
        getArrayCard[numberSlides - 1] = 1;
        localStorage.setItem("arrayCard", JSON.stringify(getArrayCard));
        displaySlides();
    }

    else{
        getArrayCard[indexActiveCard - 1] = 1;
        localStorage.setItem("arrayCard", JSON.stringify(getArrayCard));
        displaySlides();
    }
}

function keyListener(){
    document.addEventListener('keydown', function(event) {
        if (event.code == "ArrowRight"){
            skipForward();
        }

        if (event.code == "Space"){
            skipForward();
        }

        if (event.code == "ArrowLeft"){
            skipBack();
        }
    });
}

function intervalSkip(){
    let leftArrow = document.querySelector(".left_arrow");
    let rightArrow = document.querySelector(".right_arrow");
    let inteval = 3000;

    setInterval(skipForward, inteval);

    leftArrow.addEventListener('click', function(e) {
        for(var i = 1; i < 1000; i++) {
            clearTimeout(i);
        }
        setInterval(skipForward, inteval);
    });

    rightArrow.addEventListener('click', function(e) {
        for(var i = 1; i < 1000; i++) {
            clearTimeout(i);
        }
        setInterval(skipForward, inteval);
    });

    document.addEventListener('keydown', function(event) {
        if (event.code == "ArrowRight"){
            for(var i = 1; i < 1000; i++) {
                clearTimeout(i);
            }
            setInterval(skipForward, inteval);
        }

        if (event.code == "Space"){
            for(var i = 1; i < 1000; i++) {
                clearTimeout(i);
            }
            setInterval(skipForward, inteval);
        }

        if (event.code == "ArrowLeft"){
            for(var i = 1; i < 1000; i++) {
                clearTimeout(i);
            }
            setInterval(skipForward, inteval);
        }
    });
}

initSlider();


