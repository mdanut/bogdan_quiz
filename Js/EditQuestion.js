var intr;
var varA;
var varB;
var varC;
var varD;
var varE;
var form;
var idIntrebare;
var scor1,scor2,scor3,scor4,scor5;
var jsonObj;
var idArray;

$(document).ready(function(){
  
   $.ajax({
    url: "http://172.30.0.141:8080/spring/JsonQuestions",
    type : "GET",
    dataType : "json",
     
    success: function(result){
            jsonObj=result;
    },
    error: function(xhr, status, error) {
       alert('status ='+status+' eroarea='+error);
    },
    complete : function(xhr,status){
      creareListaId(); 
    }

  });

   
   valideazaCampurile();
   
   
  $("#selectQuestion").click(function(){

    idIntrebare = $("#editQuestionNr").val();

    for (var i = 0; i < jsonObj.data.length; i++) {
      if(jsonObj.data[i].id == idIntrebare){
        $("#intrebare").val(jsonObj.data[i].question);
        $("#selectList").val(jsonObj.data[i].nrOfCorrectAnswers);
        $("#variantaA").val(jsonObj.data[i].A);
        $("#variantaB").val(jsonObj.data[i].B);
        $("#variantaC").val(jsonObj.data[i].C);
        $("#variantaD").val(jsonObj.data[i].D);
        $("#variantaE").val(jsonObj.data[i].E);
      }
    
    };
      
   
    for (var i = 1; i <= 5 ; i++){
      
      $("#"+i.toString()+"ok").prop("checked", false);
    
    }

  });
  
  $("#editQuestionButton").click(function(){
      modificaIntrebarea();
  });

  $("#deleteQuestionButton").click(function(){
      stergeIntrebarea();
  });

});

function modificaIntrebarea(){
  
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
      url: "http://172.30.0.141:8080/spring/update",
      type : "GET",
      data : {
        id : idIntrebare,
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
        alert("Intrebarea a fost modificata cu succes!")
      },
      error: function(xhr, status, error) {
        alert('status ='+status);
      }
    });
  }
}

function stergeIntrebarea(){

  if (idIntrebare == undefined ){
    
    alert("Va rugam selectati intrebarea pe care doriti sa o stergeti");
  
  }
  else{
    
    $.ajax({
        url: "http://172.30.0.141:8080/spring/deleteQuestion",
        type : "GET",
        data : {
          id : idIntrebare
        },
        success : function(){
          alert("Intrebarea a fost eliminata cu succes!")
        },
        error: function(xhr, status, error) {
          alert('status ='+status);
        }
    });

  }
}

function verifyChecks(){
  
  for (var i = 1; i <= 5 ; i++) {
  
    if($("#"+i.toString()+"ok").prop("checked") == true ){
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

function creareListaId() {

  idArray = jsonObj.data;
  $.each( idArray ,function(index,value){
        $('<option>' +value.id +'</option>').attr("value",value.id).appendTo("#editQuestionNr");
  })
  
}