

setInterval(()=>{
    let timeH = new Date().getHours()
    let timeM = new Date().getMinutes()
    let timeS = new Date().getSeconds()

    let textH = document.getElementById('hour')
    let textM = document.getElementById('minute')
    let textS = document.getElementById('second')

    if(timeH < 10){
        textH.innerHTML = '0' + timeH;
    } else {
        textH.innerHTML = timeH;
    };
    if(timeM < 10){
        textM.innerHTML = '0' + timeM;
    } else {
        textM.innerHTML = timeM;
    };
    if(timeS < 10){
        textS.innerHTML = '0' + timeS;
    } else{
        textS.innerHTML = timeS;
    };

}, 999)

let btnClearAlarm = document.getElementById('remove');
let btnPauseAlarm = document.getElementById('pause');
let btnPlayAlarm = document.getElementById('play');
let alarmBtn = document.getElementById('btnAlarm');
let alarmCan = true;
let cronometerCan = true;
let hour, minute, second, cronometer;

let timeHourText = document.getElementById('hourT')
let timeMinuteText = document.getElementById('minuteT')
let timeSecondText = document.getElementById('secondT')

let timerHourText = document.getElementById('timerHourText')
let timerMinuteText = document.getElementById('timerMinuteText')
let timerSecondText = document.getElementById('timerSecondText')


alarmBtn.addEventListener("click",()=>{



    if(timeHourText.value > 24){
        timeHourText.value = 24;
    };

    if(timeHourText.value == 24){
        timeMinuteText.value = '00';
        timeMinuteText.innerHTML = "00";

        timeSecondText.value = '00';
        timeSecondText.innerHTML = "00";
    }
    
    if(timeHourText.value.length > 2){
        timeHourText.value = 0 + "0";
    };

    if(timeMinuteText.value > 59){
        timeMinuteText.value = 59
    };

    if(timeMinuteText.value.length > 2){
        timeMinuteText.value = 0 + "0";
    };

    if(timeSecondText.value > 59){
        timeSecondText.value = 59
    };
    
    if(timeSecondText.value.length > 2){
        timeSecondText.value = 0 + "0";
    };

    if(timeHourText.value != '' && timeMinuteText.value != '' && timeSecondText.value != "" && alarmCan){
        
        if(timeHourText.value < 10 && Number(timeHourText.value) != 00 ){
            timerHourText.value = '0' + timeHourText.value;
            timerHourText.innerHTML = '0' + timeHourText.value;
        }else{
            timerHourText.value = timeHourText.value;
            timerHourText.innerHTML = timeHourText.value;
        };

        if(Number(timeHourText.value) == 0){
            timerHourText.innerHTML = '00';
        };

        if(timeMinuteText.value < 10 && Number(timeMinuteText.value) != 00 || Number(timeMinuteText.value) == 0){
            timerMinuteText.value = '0' + timeMinuteText.value;
            timerMinuteText.innerHTML = '0' + timeMinuteText.value;
        } else{
            timerMinuteText.value = timeMinuteText.value;
            timerMinuteText.innerHTML = timeMinuteText.value;
        };

        if(Number(timeMinuteText.value) == 0){
            timerMinuteText.innerHTML = '00';
        };

        if(timeSecondText.value < 10 && Number(timeSecondText.value) != 00 || Number(timeSecondText.value) == 0){
            timerSecondText.value = '0' + timeSecondText.value;
            timerSecondText.innerHTML = '0' + timeSecondText.value;
        } else{
            timerSecondText.value = timeSecondText.value;
            timerSecondText.innerHTML = timeSecondText.value;
        };

        if(Number(timeSecondText.value) == 0){
            timerSecondText.innerHTML = '00';
        };

        if(timerHourText.value.length > 2){
            timerHourText.innerHTML = timeHourText.value;
            timerHourText.value = timeHourText.value;
        };
        
        if(timerMinuteText.value.length > 2){
            timerMinuteText.innerHTML = timeMinuteText.value;
            timerMinuteText.value = timeMinuteText.value;
        };

        if(timerSecondText.value.length > 2){
            timerSecondText.innerHTML = timeSecondText.value;
            timerSecondText.value = timeSecondText.value;
        };
        
        btnPauseAlarm.style.display = "block";
        btnClearAlarm.style.display = "block";
        btnPlayAlarm.style.display = "block";
    }else if(!alarmCan){
        alert('Alarm exists')
    } else {
        timerHourText.innerHTML = '00'
        timerMinuteText.innerHTML = '00'
        timerSecondText.innerHTML = '00'
    };

    

    if(timeHourText.value == ''){
        Focus(timeHourText)
    } else {
        Unfocus(timeHourText)
    };
    if(timeMinuteText.value == ''){
        Focus(timeMinuteText)
    } else {
        Unfocus(timeMinuteText)
    };
    if(timeSecondText.value == ''){
        Focus(timeSecondText)
    } else {
        Unfocus(timeSecondText)
    };

    

    hour = Number(timerHourText.value);
    minute = Number(timerMinuteText.value);
    second = Number(timerSecondText.value);
    
    
    while(cronometerCan && alarmCan){

        cronometer = setInterval(() => {
        
            if(hour > 0 && minute == 0 && second == 0){
                hour--;
                minute = 60;

                timerHourText.value = hour < 10 ? '0' + hour: hour;
                timerHourText.innerHTML = hour < 10 ? '0' + hour: hour;

                timerMinuteText.value = minute;
                timerMinuteText.innerHTML = minute;

            };
    
            if(minute <= 60 && minute > 0 && second == 0){
                minute--;
                second = 60;

                timerMinuteText.value = minute < 10 ? '0' + minute : minute;
                timerMinuteText.innerHTML = minute < 10 ? '0' + minute : minute;

                timerSecondText.value = second;
                timerSecondText.innerHTML = second;
            };
    
            if(second <= 60 && second > 0){
                second--;

                timerSecondText.value = second < 10 ? '0' + second : second;
                timerSecondText.innerHTML = second < 10 ? '0' + second : second;
            };
    
            if(hour == 0 && minute == 0 && second == 0){
                clearInterval(cronometer)
                alarmCan = true;
                cronometerCan = true;
                btnClearAlarm.style.display = "none";
                btnPauseAlarm.style.display = "none";
                btnPlayAlarm.style.display = "none";
            };
        }, 999)
        alarmCan = false;
        cronometerCan = false;
    };


    
})

function Focus(item){
    item.style.border = "2px solid red";
}

function Unfocus(item){
    item.style.border = "none";
}

btnClearAlarm.addEventListener('click', ()=>{
    clearInterval(cronometer);

    timerHourText.value = '00';
    timerMinuteText.value = '00';
    timerSecondText.value = '00';

    timerHourText.innerHTML = '00';
    timerMinuteText.innerHTML = '00';
    timerSecondText.innerHTML = '00';

    alarmCan = true;
    cronometerCan = true;
    btnClearAlarm.style.display = "none";
    btnPauseAlarm.style.display = "none";
    btnPlayAlarm.style.display = "none";
})

let clearTimerText = document.getElementById('btnAlarmClear');

clearTimerText.addEventListener('click',()=>{
    timeHourText.value = "";
    timeMinuteText.value = "";
    timeSecondText.value = "";

    Unfocus(timeHourText);
    Unfocus(timeMinuteText);
    Unfocus(timeSecondText);
});


btnPauseAlarm.addEventListener('click',()=>{
    clearInterval(cronometer)
    alarmCan = true;
    cronometerCan = true;
})

btnPlayAlarm.addEventListener('click',() => {

    while(cronometerCan && alarmCan){
        cronometer = setInterval(() => {
        
            if(hour > 0 && minute == 0 && second == 0){
                hour--;
                minute = 60;
    
                timerHourText.value = hour < 10 ? '0' + hour: hour;
                timerHourText.innerHTML = hour < 10 ? '0' + hour: hour;
    
                timerMinuteText.value = minute;
                timerMinuteText.innerHTML = minute;
    
            };
    
            if(minute <= 60 && minute > 0 && second == 0){
                minute--;
                second = 60;
    
                timerMinuteText.value = minute < 10 ? '0' + minute : minute;
                timerMinuteText.innerHTML = minute < 10 ? '0' + minute : minute;
    
                timerSecondText.value = second;
                timerSecondText.innerHTML = second;
            };
    
            if(second <= 60 && second > 0){
                second--;
    
                timerSecondText.value = second < 10 ? '0' + second : second;
                timerSecondText.innerHTML = second < 10 ? '0' + second : second;
            };
    
            if(hour == 0 && minute == 0 && second == 0){
                clearInterval(cronometer)
                alarmCan = true;
                cronometerCan = true;
                btnClearAlarm.style.display = "none";
                btnPauseAlarm.style.display = "none";
                btnPlayAlarm.style.display = "none";
            };
        }, 999)
        alarmCan = false;
        cronometerCan = false;
    }
    
})