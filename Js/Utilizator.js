
var firstName;
var lastName;
var i;

$(document).ready(function(){
    $("button").click(function(){
    	resetCookie();
		salveazaUtilizator();
		salvareIndexUtilizator();
		location.href='Html/Intrebarea1.html'
    });
});

function salveazaUtilizator(){
	firstName = $("input#nume").val();
	lastName = $("input#prenume").val();
	setCookie('firstName',firstName);
	setCookie('lastName',lastName);
}

function salvareIndexUtilizator(){
	i = getCookie(' indexUtilizator');
	if (i == undefined){
		i=0;
		setCookie('indexUtilizator',i);
	}else{
		i++;
		setCookie('indexUtilizator',i);
	}
}
function resetCookie(){
	setCookie('min','15');
	setCookie('sec','0');
	setCookie('Total','0');
	setCookie('intrebareCurenta','1');
	for (var i = 1; i <= 10; i++) {
		setCookie('rez'+i.toString(),'0,0,0,0,0');
	}
	
}

