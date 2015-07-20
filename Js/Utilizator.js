
var firstName;
var lastName;
var i;

/*---------------IN FUNCTIA READY AR TREBUI SA INCLUZI TOATE CELELALTE FUNCTII DIN FISIER, PENTRU CA ACESTEA SA SE EXECUTE DOAR DUPA CE SE INCARCA PAGINA HTML-------------------------*/
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
} /*---------------LASA UN RAND LIBER-------------------------*/
function resetCookie(){
	setCookie('min','15');
	setCookie('sec','0');
	setCookie('Total','0');
	setCookie('intrebareCurenta','1');
	for (var i = 1; i <= 10; i++) {
		setCookie('rez'+i.toString(),'0,0,0,0,0');
	}
	
}

