var jsonObj; 
var firstname;
var lastname;
var userEmail;


function getJson(i){
  var nrIntrebare;
  nrIntrebare = parseInt(i);
	 
  $.ajax({
		url: "http://172.30.0.141:8080/spring/JsonQuestions",
		type : "GET",
		dataType : "json",
    async : false,
     
		success: function(result){
     	jsonObj=result; 
      displayQuestionsAndAnswers(nrIntrebare);
   	},
    error: function(xhr, status, error) {
     alert('status ='+status+' eroarea='+error);
    }
	});
}

function displayQuestionsAndAnswers(nrIntrebare){
   
    var questionId = parseInt(nrIntrebare);

    var nrRaspCorecte = jsonObj.data[questionId].nrOfCorrectAnswers;
    nrRaspCorecte = parseInt(nrRaspCorecte);

    if(nrRaspCorecte == 1){
     
      for (var i = 1; i <= 5 ; i++) {
        $('<li></li>').attr('id','list'+i).appendTo('#varianteRaspuns');
        $('<input>').attr({'type':'radio', 'name':'var', 'id':'inputVarianta'+i}).appendTo('#list'+i);
        $('<label></label> ').attr({'id':"varianta"+i}).appendTo('#list'+i);
      }

    }else{

      for (var i = 1; i <= 5 ; i++) {
        $('<li></li>').attr('id','list'+i).appendTo('#varianteRaspuns');
        $('<input>').attr({'type':'checkbox','id':'inputVarianta'+i}).appendTo('#list'+i);
        $('<label></label> ').attr({'id':"varianta"+i}).appendTo('#list'+i);
      }

    }
    
    $("label#question-id").text(jsonObj.data[questionId].id);
  	$("label#question-label").text(jsonObj.data[questionId].question);
    $("label#varianta1").text(jsonObj.data[questionId].A);
    $("label#varianta2").text(jsonObj.data[questionId].B);
    $("label#varianta3").text(jsonObj.data[questionId].C);
    $("label#varianta4").text(jsonObj.data[questionId].D);
    $("label#varianta5").text(jsonObj.data[questionId].E);


}
