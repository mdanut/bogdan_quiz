
var firstName;
var lastName;
var i;


$(document).ready(function(){
    resetCookie();
    $("button").click(function(){
		salveazaUtilizator();
		salvareIndexUtilizator();
		location.href='Html/Intrebarea1.html';
    });
});

function salveazaUtilizator(){
	firstName = $("input#firstname").val();
	lastName = $("input#lastname").val();
	setCookieValue('firstName',firstName);
	setCookieValue('lastName',lastName);
}

function salvareIndexUtilizator(){

	i = getCookieValueByKey('indexUtilizator');

	if (i == undefined){
		i=0;
		setCookieValue('indexUtilizator',i);
	}else{
		i++;
		setCookieValue('indexUtilizator',i);
	}
}


function resetCookie(){
	setCookieValue('min','15');
	setCookieValue('sec','0');
	setCookieValue('Total','0');
	setCookieValue('intrebareCurenta','1');
	for (var i = 1; i <= 10; i++) {
		setCookieValue('rez'+i.toString(),'0,0,0,0,0');
	}
	
}

