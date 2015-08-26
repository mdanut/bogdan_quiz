var rezultate=[0,0,0,0,0];
var rez1;

function checkCheckBox(j){
	var i=parseInt(j);
	
	switch(i){
		case 0:rezultate[0]+=1;break;
		case 1:rezultate[1]+=1;break;
		case 2:rezultate[2]+=1;break;
		case 3:rezultate[3]+=1;break;
		case 4:rezultate[4]+=1;break;			
	}
}

function checkRadio(j){
	var i=parseInt(j);
	rezultate=[0,0,0,0,0];
	
	switch(i){
		case 0:rezultate[0]=1;break;
		case 1:rezultate[1]=1;break;
		case 2:rezultate[2]=1;break;
		case 3:rezultate[3]=1;break;
		case 4:rezultate[4]=1;break;			
	}
}

function reCheck(vector){
    var aux;
    checkArray = vector.split(',');
    
    for (var i = 0; i < checkArray.length; i++){
        
        aux=parseInt(checkArray[i]);
        rezultate[i]=aux;
        
        if (aux % 2 != 0 ){
            switch(i){
                case 0: $("#inputVarianta1").prop("checked", true);break;
                case 1: $("#inputVarianta2").prop("checked", true);break;
                case 2: $("#inputVarianta3").prop("checked", true);break;
                case 3: $("#inputVarianta4").prop("checked", true);break;
                case 4: $("#inputVarianta5").prop("checked", true);break;
                }
            }
            else{
                switch(i){
                case 0: $("#inputVarianta1").prop("checked", false);break;
                case 1: $("#inputVarianta2").prop("checked", false);break;
                case 2: $("#inputVarianta3").prop("checked", false);break;
                case 3: $("#inputVarianta4").prop("checked", false);break;
                case 4: $("#inputVarianta5").prop("checked", false);break;
            }
        }
    }
}


function getRez(){
	return rezultate;
}
function resetRez(){
	rezultate=[0,0,0,0,0];
}

