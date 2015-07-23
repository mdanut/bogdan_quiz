//GLOBAL VARIABLES
var nume;
var prenume;
var puncte;
var nr;
var dateUtilizator;

$(document).ready(function(){
	initializeUserMatrix();
	adugareUtilizatorInMatrice();
	afisareRezultat();
    $("button#final").click(function(){
		resetCookie();
		location.href='../Main.html'
    });
});

//INITIALIZE USERS MATRIX
function initializeUserMatrix(){
	nr=getCookieValueByKey('indexUtilizator');
	nr=parseInt(nr);
	dateUtilizator = new Array(nr+1);
	for (var j = 0; j < dateUtilizator.length; j++) {
		dateUtilizator[j] = new Array(3);
	}
}

//DISPLAY FUNCTION
function afisareRezultat(){
	var list = $('<ol>');
	var item;
	var text = '';
	nr=getCookieValueByKey('indexUtilizator'); 
	
	for (var i = 0; i <= nr ; i++){
    	item = $('<li>');
    	text = dateUtilizator[i][0]+ ' ' + dateUtilizator[i][1] + '  '  + dateUtilizator [i][2]+ ' puncte';
    	item.append(text);
    	if( (i>0) && (dateUtilizator[i][2] >= dateUtilizator[i-1][2])){
    		list.prepend(item);
    	}else{
    		list.append(item);
    	}
	}
	 $('div#rez').html(list);
 }

function adugareUtilizatorInMatrice(){
	nume =getCookieValueByKey('firstName');
	prenume = getCookieValueByKey('lastName');
	puncte = sumaPunctaj();
	
	if (puncte < 0){
		puncte=0;
	}
	nr=getCookieValueByKey('indexUtilizator');
	nr=parseInt(nr);
	
	if (nr == 0){
		dateUtilizator[nr][0]=nume;
		dateUtilizator[nr][1]=prenume;
		dateUtilizator[nr][2]=puncte;
		setCookieValue('matriceUtilixatori',dateUtilizator);
	}else{
		preluareMatriceUtilizatori();
		dateUtilizator[nr][0]=nume;
		dateUtilizator[nr][1]=prenume;
		dateUtilizator[nr][2]=puncte;
		setCookieValue('matriceUtilixatori',dateUtilizator);
	} 
}

function preluareMatriceUtilizatori(){

	var date=getCookieValueByKey('matriceUtilixatori');
	var j=0;
	nr=getCookieValueByKey('indexUtilizator');
	nr=parseInt(nr);
	date = date.split(',');
	
	for (var i = 0; i<=nr; i++){
		dateUtilizator[i][0]=date[j];
		dateUtilizator[i][1]=date[j+1];
		dateUtilizator[i][2]=date[j+2];
		j=j+3;
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
