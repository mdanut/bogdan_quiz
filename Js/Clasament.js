/*---------------COMENTARIILE, NUMELE VARIABILELOR SI A FUNCTIILOR SA LE PUI IN LIMBA ENGLEZA-------------------------*/
//variabile globale
var nume;
var prenume;
var puncte;
var nr;

//matrice utilizatori
/*---------------POTI FOLOSI O FUNCTIE DE INITIALIZARE, IN CARE SA PUI ACEST FOR-------------------------*/
var dateUtilizator = new Array(10);
for (var j = 0; j < dateUtilizator.length; j++) {
	dateUtilizator[j] = new Array(3);
}

/*---------------IN FUNCTIA READY AR TREBUI SA INCLUZI TOATE CELELALTE FUNCTII DIN FISIER, PENTRU CA ACESTEA SA SE EXECUTE DOAR DUPA CE SE INCARCA PAGINA HTML-------------------------*/
$(document).ready(function(){
	adugareUtilizatorInMatrice();
	afisareRezultat();
    $("button#final").click(function(){
		location.href='../Main.html'
    });
});

//functia de afisare
function afisareRezultat(){
	var list = $('<ol>');
	var item;
	var text = '';
	nr=getCookie(' indexUtilizator'); /*----------------------REDENUMESTE FUNCTIA IN getCookieValueByKey-------------------------------*/
	
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
	nume =getCookie(' firstName'); /*----------------------NU LASA SPATIU INAINTE DE firstName-------------------------------*/
	prenume = getCookie(' lastName');
	puncte = sumaPunctaj();
	
	if (puncte < 0){
		puncte=0;
	}
	nr=getCookie(' indexUtilizator');
	nr=parseInt(nr);
	
	if (nr == 0){
		dateUtilizator[nr][0]=nume;
		dateUtilizator[nr][1]=prenume;
		dateUtilizator[nr][2]=puncte;
		setCookie('matriceUtilixatori',dateUtilizator);
	}else{
		preluareMatriceUtilizatori();
		dateUtilizator[nr][0]=nume;
		dateUtilizator[nr][1]=prenume;
		dateUtilizator[nr][2]=puncte;
		setCookie('matriceUtilixatori',dateUtilizator);
	} 
}
/*----------------------PREA MULTE SPATII LIBERE-------------------------------*/

function preluareMatriceUtilizatori(){
	var date=getCookie(' matriceUtilixatori');
	var j=0;
	nr=getCookie(' indexUtilizator');
	nr=parseInt(nr);
	date = date.split(',');
	
	for (var i = 0; i<=nr; i++){
		dateUtilizator[i][0]=date[j];
		dateUtilizator[i][1]=date[j+1];
		dateUtilizator[i][2]=date[j+2];
		j=j+3;
	}
}

