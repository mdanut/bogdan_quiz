var intr;
var varA;
var varB;
var varC;
var varD;
var varE;
var form;
$(document).ready(function(){
	
  valideazaCampurile();
	
  $("#addQuestionButton").click(function(){
			salveazaIntrebarea();
	});
});
function salveazaIntrebarea(){
	
  valideazaCampurile();
	
  if(form.valid()==true){
		intr = $("#intrebare").val();
		varA = $("#variantaA").val();
		varB = $("#variantaB").val();
		varC = $("#variantaC").val();
		varD = $("#variantaD").val();
		varE = $("#variantaE").val();
		$("#a").text("form is ok");
	}
}

function valideazaCampurile(){
	
  jQuery.validator.setDefaults({
  		debug: true,
  		success: "valid"
	});
	
	form = $("#addQuestionForm" );
	
	form.validate({
  		rules: {
    		intrebare: {
    			required: true,
    			minlength : "6"
    		},
    		variantaA : {
    			required: true
   			 },
   			 variantaB : {
    			required: true
    		},
   			variantaC : {
    			required: true
    		},
    		variantaD : {
    			required: true
    		},
    		variantaE : {
    			required: true
    		},
        selectList : {
          required: true
        },
        VarianteCheck : {
          required : true
        }
  		}
	});
}