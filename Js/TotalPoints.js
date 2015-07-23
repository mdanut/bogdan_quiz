
var Punctaj= new Array();
var RaspunsuriUtilizator;
var ValoareRaspunsuri

function initiaizareMatrici(){
  
  RaspunsuriUtilizator= new Array(10);
	
	for (var j = 0; j < RaspunsuriUtilizator.length; j++) {
		RaspunsuriUtilizator[j] = new Array(5);
	}
	
	ValoareRaspunsuri=[[0,10,0,0,0],
					   	  	[-5,5,-5,-5,5],
					   		[0,0,10,0,0],
					   		[0,10,0,0,0],
					   		[0,10,0,0,0],
					   		[0,10,0,0,0],
					   		[0,10,0,0,0],
					   		[0,0,0,10,0],
					   		[0,0,10,0,0],
					   		[5,5,-5,-5,-5]
					   	];

}

//THIS FUNCTION GET'S THE ANSWERS GIVEN BY THE USER AND CREATE A MATRIX WITH THOSE ANSWERS
function formareMatriceRaspunsuri(){
	var raspCurente;
	
	initiaizareMatrici();

	for (var i = 0; i < 10; i++) {
		raspCurente = getCookieValueByKey('rez'+(i+1).toString());

		if(raspCurente == undefined){
			raspCurente="0,0,0,0,0";
		}
		
		AnswersArray = raspCurente.split(',');
		
		for (var j = 0; j < 5; j++) {
			RaspunsuriUtilizator[i][j]=parseInt(AnswersArray[j]);
		}
	}
}

//THIS FUNCTION CREATE AN ARRAY WITH THE POINTS OBTAINDED FOR EACH QUESTION
function calculeazaPunctaj(){
	formareMatriceRaspunsuri();
	var k=0;

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

//THIS FUNCTION CALCULATES THE FINAL SCORE USERS OBTAINED
function sumaPunctaj(){
	var PunctajFinal = 0;
	var puncte = calculeazaPunctaj();

	for (var i = 0; i < puncte.length; i++) {
		PunctajFinal += parseInt(puncte[i]);
	}
	return PunctajFinal;
}