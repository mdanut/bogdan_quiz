var jsonObj; 

function getJson(i){
	var nrIntr=i;
	$.ajax({
		url: "http://172.30.0.141:8080/spring/questions",
		type : "GET",
		dataType : "json",
		success: function(result){
          	jsonObj=result;
          	getQuestion(nrIntr);
    	},
    	error: function(xhr, status, error) {
    	 alert('status ='+status);
    	}
	});
}

function displayJson(){
  	$("label#intr").html(jsonObj[1].id+" "+jsonObj[1].question);
  	$("label#varianta1").html(jsonObj.Questions[j].var1);
	$("label#varianta2").html(jsonObj.Questions[j].var2);
	$("label#varianta3").html(jsonObj.Questions[j].var3);
	$("label#varianta4").html(jsonObj.Questions[j].var4);
	$("label#varianta5").html(jsonObj.Questions[j].var5);
}

function getQuestion(i){
	var j=parseInt(i);
	$("label#intr").html(jsonObj[j].id+". "+jsonObj[j].question);
}
