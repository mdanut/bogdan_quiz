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
            seconds1=checkTime(seconds);
            minutes1=checkTime(minutes);
            if (minutes == 0 && seconds == 0) {
                location.href='Rezultat.html';
            }
            else{
            $("div#txt").html("Remaining time "+minutes1+":"+seconds1);
            }
        }
        timp=setInterval(displayTime,1000);
    }
    function checkTime(i) {
        if (i<10) {i = "0" + i};  
        return i;
    }
    function getMinutes(){
        return minutes;
    }
    function getSeconds(){
        return seconds;
    }