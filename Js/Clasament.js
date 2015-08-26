//GLOBAL VARIABLES
var nume;
var prenume;
var puncte;
var nr;
var dateUtilizator;

$(document).ready(function(){
	
	disableBack();
	setUsersStandings();
      
    $("button#final").click(function(){
		location.href='../Main.html'
    });

});

function setUsersStandings(){
    var raspCurente;
    var AnswersArray="";

    firstname = getCookieValueByKey("firstName");
    lastname = getCookieValueByKey("lastName");
    userEmail = getCookieValueByKey("userEmail");

    for (var i = 0; i < 10; i++) {
        raspCurente = getCookieValueByKey('rez'+(i+1).toString());
        if(raspCurente == undefined){
            raspCurente="0,0,0,0,0";
        }
        if(i <= 8){
            AnswersArray += raspCurente+",";
        }else{
            AnswersArray += raspCurente;
        }
    }
    
    $.ajax({
            url: "http://172.30.0.141:8080/spring/score",
            type : "GET",
            data : {
                scoreString : AnswersArray,
                name : lastname,
                surname : firstname,
                email : userEmail
            },
   
            success: function(result){
               $('div#rez').html(result);
            },

            error: function(xhr, status, error) {
                alert('status ='+status+' eroarea='+error);
            }
        });
}

function disableBack(){
    window.onload = window.history.forward();
        window.onpageshow = function(evt) {
             if (evt.persisted){
                window.history.forward();
             } 
         }
}