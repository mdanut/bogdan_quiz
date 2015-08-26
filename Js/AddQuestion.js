var intr;
var varA;
var varB;
var varC;
var varD;
var varE;
var form;
var scor1,scor2,scor3,scor4,scor5;

$(document).ready(function(){
  
  valideazaCampurile();
  
  $("#addQuestionButton").click(function(){
      salveazaIntrebarea();
  })

});

function salveazaIntrebarea(){
  
  valideazaCampurile();
  
  if(form.valid()==true){
    intr = $("#intrebare").val();
    nrCorecte = $("#selectList").val();
    varA = $("#variantaA").val();
    varB = $("#variantaB").val();
    varC = $("#variantaC").val();
    varD = $("#variantaD").val();
    varE = $("#variantaE").val();
    
    verifyChecks();
    
    $.ajax({
      url: "http://172.30.0.141:8080/spring/save",
      type : "GET",
      data : {
        question : intr,
        nr : nrCorecte,
        ans1 : varA,
        ans2 : varB,
        ans3 : varC,
        ans4 : varD,
        ans5 : varE,
        s1 : scor1,
        s2 : scor2,
        s3 : scor3,
        s4 : scor4,
        s5 : scor5
      },
      success : function(){
        alert("Intrebarea a fost adaugata cu succes in baza de date!")
      },
      
      error: function(xhr, status, error) {
        alert('status ='+status);
      }
    });
  }
}

function verifyChecks(){
  
  for (var i = 1; i <= 5 ; i++) {
  
    if($(i+"ok").attr("checked") == true ){
      switch(i){
        case 1 : scor1 = 1;break;
        case 2 : scor2 = 1;break;
        case 3 : scor3 = 1;break;
        case 4 : scor4 = 1;break;
        case 5 : scor5 = 1;break;
      }
    }else{
       switch(i){
        case 1 : scor1= -1;break;
        case 2 : scor2= -1;break;
        case 3 : scor3= -1;break;
        case 4 : scor4= -1;break;
        case 5 : scor5= -1;break;
      } 
    }
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