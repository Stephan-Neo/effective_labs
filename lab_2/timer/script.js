function initTimer(){
    let timerInputMinute = document.querySelector(".minute");
    let timerInputSeconds = document.querySelector(".seconds");
    let buttonRun = document.querySelector(".start");
    let buttonStop = document.querySelector(".stop");
    let buttonReset = document.querySelector(".reset");
    let wrapper = document.querySelector(".wrapper");
    let run = localStorage.getItem("run");

    for(let i = 1; i < 1000; i++) {
        clearTimeout(i);
    }

    buttonRun.addEventListener('click', function() {
        let timeMinute = parseInt(timerInputMinute.value);
        let timeSeconds = parseInt(timerInputSeconds.value);
        run = localStorage.getItem("run");

        if(validetaInput(timerInputMinute, timerInputSeconds) && run != 1){
            wrapper.style.background = "rgba(23,157,252,0.53)";
            disabledTimer(true);

            localStorage.setItem("minute", JSON.stringify(timeMinute));
            localStorage.setItem("countMinute", JSON.stringify(0));
            localStorage.setItem("allMinute", JSON.stringify(++timeMinute));
            localStorage.setItem("seconds", JSON.stringify(timeSeconds));
            localStorage.setItem("run", JSON.stringify(1));

            for(let i = 1; i < 1000; i++) {
                clearTimeout(i);
            }
            setInterval(dispalyTime, 1000);
        }
    });

    buttonStop.addEventListener('click', function() {
        if(localStorage.getItem('run') == 1){
            localStorage.setItem("pause", JSON.stringify(1));
            localStorage.setItem("run", JSON.stringify(0));
            wrapper.style.background = "rgba(196,204,206,0.53)";
            disabledTimer(true);
            dispalyTime();
        }
    });

    buttonReset.addEventListener('click', function() {
        wrapper.style.background = "rgb(255,255,255)";
        disabledTimer(false)
        localStorage.clear();
        dispalyTime();
    });

    if(run == 1){
        dispalyTime();
        setInterval(dispalyTime, 1000);
    }

    if(localStorage.getItem("pause") == 1){
        wrapper.style.background = "rgba(196,204,206,0.53)";
        disabledTimer(true);
        dispalyTime();
    }
}

function validetaInput(timerInputMinute, timerInputSeconds){
    let timeMinute = parseInt(timerInputMinute.value);
    let timeSeconds = parseInt(timerInputSeconds.value);

    if(!isNaN(parseInt(timerInputMinute.value)) && !isNaN(parseInt(timerInputSeconds.value))){
        if(timeMinute < 0 || timeMinute >= 60 || timeSeconds < 0 || timeSeconds >= 60) {
            alert("Промежуток минут и секунд должен быть от 0 до 60");
        }
        else{
            return true
        }
    }
    return false;
}

function dispalyTime(){
    let run = localStorage.getItem("run");
    let minute = localStorage.getItem("minute");
    let seconds = localStorage.getItem("seconds");
    let allMinute = localStorage.getItem("allMinute");
    let countMinute = localStorage.getItem("countMinute")

    let timerInputMinute = document.querySelector(".minute");
    let timerInputSeconds = document.querySelector(".seconds");

    let wrapper = document.querySelector(".wrapper");

    if(run == '1'){
        wrapper.style.background = "rgba(23,157,252,0.53)";
        disabledTimer(true);
        if(!(allMinute - countMinute == 1)){
            if(seconds == 0){
                localStorage.setItem("minute", JSON.stringify(--minute));
                localStorage.setItem("seconds", JSON.stringify(59));
                localStorage.setItem("countMinute", JSON.stringify(++countMinute));
            }
            else{
                localStorage.setItem("seconds", JSON.stringify(--seconds));
            }
        }
        else{
            if(seconds == 0){
                localStorage.clear();
                localStorage.setItem("playAudio", JSON.stringify(1));
                wrapper.style.background = "rgba(231,96,106,0.53)";
                let audio = new Audio("source/gonk.mp3");
                audio.play();
                audio.onended=function(){
                    if(localStorage.getItem("playAudio") == 1){
                        this.play();
                    }
                }
            }
            else{
                localStorage.setItem("seconds", JSON.stringify(--seconds));
            }
        }
    }else{
        for(let i = 1; i < 1000; i++) {
            clearTimeout(i);
        }
    }

    minute = localStorage.getItem("minute");
    seconds = localStorage.getItem("seconds");

    timerInputMinute.value = minute;
    timerInputSeconds.value = seconds;
}

function disabledTimer(bol){
    let timerInputMinute = document.querySelector(".minute");
    let timerInputSeconds = document.querySelector(".seconds");
    let oneMinute = document.querySelector(".oneMinute");
    let fiveMinute = document.querySelector(".fiveMinute");
    let tenMinute = document.querySelector(".tenMinute");

    oneMinute.disabled = bol;
    fiveMinute.disabled = bol;
    tenMinute.disabled = bol;
    timerInputMinute.disabled = bol;
    timerInputSeconds.disabled = bol;
}

function clickOneMinute(){
    let timerInputMinute = document.querySelector(".minute");
    let timerInputSeconds = document.querySelector(".seconds");

    timerInputMinute.value = 1;
    timerInputSeconds.value = 0;
}

function clickFiveMinute(){
    let timerInputMinute = document.querySelector(".minute");
    let timerInputSeconds = document.querySelector(".seconds");

    timerInputMinute.value = 5;
    timerInputSeconds.value = 0;
}

function clickTenMinute(){
    let timerInputMinute = document.querySelector(".minute");
    let timerInputSeconds = document.querySelector(".seconds");

    timerInputMinute.value = 10;
    timerInputSeconds.value = 0;
}

initTimer();