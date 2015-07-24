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

	dateUtilizatorSortat = new Array(nr+1);
	for (var j = 0; j < dateUtilizatorSortat.length; j++) {
		dateUtilizatorSortat[j] = new Array(3);
	}
}

//DISPLAY FUNCTION
function afisareRezultat(){
	var list = $('<ol>');
	var item;
	var text = '';
	nr=getCookieValueByKey('indexUtilizator'); 
	sortUsers();

	for (var i = 0; i <=nr ; i++){
    	item = $('<li>');
    	text = dateUtilizatorSortat[i][0]+ ' ' + dateUtilizatorSortat[i][1] + '  '  + dateUtilizatorSortat[i][2]+ ' puncte';
    	item.append(text);
    	list.append(item);

    	//for (var j = 0; j <= i; j++) {	
    	//	if (dateUtilizatorSortat[i][2] >= dateUtilizator[i-j][2]) {
    	//		list.prepend(item);
    	//	}else{
    	//		list.append(item);
    	//	}
    	//}
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

function sortUsers(){
	var pointsArray = new Array(dateUtilizator.length);
	for (var i = 0; i < dateUtilizator.length; i++) {
		pointsArray[i]  = dateUtilizator[i][2];
	}
	pointsArray.sort(function(a, b){return b-a});

	for (var i = 0; i < pointsArray.length; i++) {
		for (var j= 0; j < pointsArray.length; j++) {
			if (pointsArray[i] == dateUtilizator[j][2]){
				dateUtilizatorSortat[i][0] = dateUtilizator[j][0]
				dateUtilizatorSortat[i][1] = dateUtilizator[j][1]
				dateUtilizatorSortat[i][2] = dateUtilizator[j][2]
			}
		}
	}
}