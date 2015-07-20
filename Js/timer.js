var timp;
var seconds;
var minutes;
    function countdown(min,sec) {
        seconds = parseInt(sec);
        minutes = parseInt(min); /*---------------------LASA UN RAND LIBER------------------------------*/
        function displayTime(){
           if(seconds > 0){
                seconds--;
            }else if (minutes >=  0){
                seconds=59;
                minutes--;
            }
            seconds = parseInt(seconds);
            minutes = parseInt(minutes);
            seconds1=checkTime(seconds); /*---------------------REDENUMESTE seconds1 SI minutes1------------------------------*/
            minutes1=checkTime(minutes);
            if (minutes == 0 && seconds == 0) {
                location.href='Rezultat.html';
            }
            else{
            $("div#txt").html("Remaining time "+minutes1+":"+seconds1);
            }
        }
        timp=setInterval(displayTime,1000);
    } /*---------------------LASA UN RAND LIBER------------------------------*/
    function checkTime(i) {
        if (i<10) {i = "0" + i};  
        return i;
    } /*---------------------LASA UN RAND LIBER------------------------------*/
    function getMinutes(){ /*---------------------UNDE FOLOSESTI getMinutes SI getSeconds?------------------------------*/
        return minutes;
    } /*---------------------LASA UN RAND LIBER------------------------------*/
    function getSeconds(){
        return seconds;
    }