var timp;
var seconds;
var minutes;
    function countdown(min,sec) {
        seconds = parseInt(sec);
        minutes = parseInt(min);

        function displayTime(){
           if(seconds > 0){
                seconds--;
            }else if (minutes >=  0){
                seconds=59;
                minutes--;
            }
            seconds = parseInt(seconds);
            minutes = parseInt(minutes);
            secondsDisplayFormat=checkTime(seconds); 
            minutesDisplayFormat=checkTime(minutes);
            if (minutes == 0 && seconds == 0) {
                location.href='Rezultat.html';
            }
            else{
            $("div#txt").html("Remaining time "+minutesDisplayFormat+":"+secondsDisplayFormat);
            }
        }
        timp=setInterval(displayTime,1000);

    }

    function checkTime(i) {
        if (i<10) {i = "0" + i};  
        return i;
    }

    /* getMinutes and getSecond are used when cookies for timer are setted and are set with the current values for minutes and seconds */
    function getMinutes(){ 
        return minutes;
    }

    function getSeconds(){
        return seconds;
    }