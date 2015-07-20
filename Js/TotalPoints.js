/*---------------------POTI FOLOSI O FUNCTIE DE INITIALIZARE IN CARE SA INTRODUCI CODUL PANA LA LINIA 16------------------------------*/
var RaspunsuriUtilizator = new Array(10);
for (var j = 0; j < RaspunsuriUtilizator.length; j++) {
	RaspunsuriUtilizator[j] = new Array(5);
}
var ValoareRaspunsuri=[[0,10,0,0,0],
					   [-5,5,-5,-5,5],
					   [0,0,10,0,0],
					   [0,10,0,0,0],
					   [0,10,0,0,0],
					   [0,10,0,0,0],
					   [0,10,0,0,0],
					   [0,0,0,10,0],
					   [0,0,10,0,0],
					   [5,5,-5,-5,-5],
					   ];

var Punctaj= new Array();

//preia raspunsurile date de user si creaza o matrice dupa ele
function formareMatriceRaspunsuri(){
	var raspCurente;
	
	for (var i = 0; i < 10; i++) {
		raspCurente = getCookie(' rez'+(i+1).toString());
		if(raspCurente == undefined){
			raspCurente="0,0,0,0,0";
		}
		AnswersArray = raspCurente.split(',');
		for (var j = 0; j < 5; j++) {
			RaspunsuriUtilizator[i][j]=parseInt(AnswersArray[j]);
		}
	}
}

//creaza o matrice cu punctajele obtinute aferente fiecarei intrebari
function calculeazaPunctaj(){
	formareMatriceRaspunsuri();
	var k=0; /*---------------------LASA UN RAND LIBER------------------------------*/
	for (var i = 0; i < 10; i++){
		for (var j = 0; j < 5; j++) {
			if (RaspunsuriUtilizator[i][j] % 2 != 0 ){
				Punctaj[k]= ValoareRaspunsuri[i][j];
				k++;
			}
		}
	}
	return Punctaj;
}

//face suma totatla a punctajelor
function sumaPunctaj(){
	var PunctajFinal = 0;
	var puncte = calculeazaPunctaj(); /*---------------------LASA UN RAND LIBER------------------------------*/
	for (var i = 0; i < puncte.length; i++) {
		PunctajFinal += parseInt(puncte[i]);
	}
	return PunctajFinal;
}