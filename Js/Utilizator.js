
var firstName;
var lastName;
var userEmail;
var i;
var form;

$(document).ready(function(){
    resetCookie();
    validateForm();
    $("#next").click(function(){
		userCheck();
    });
    $("#admin").click(function(){
		adminCheck();
    });
});

function salveazaUtilizator(){
	firstName = $("#firstname").val();
	lastName = $("#lastname").val();
	userEmail = $("#email").val();
	setCookieValue("firstName",firstName);
	setCookieValue("lastName",lastName);
	setCookieValue("userEmail",userEmail);
}

function salvareIndexUtilizator(){
	i = getCookieValueByKey("indexUtilizator");
	if (i == undefined){
		i=0;
		setCookieValue("indexUtilizator",i);
	}else{
		i++;
		setCookieValue("indexUtilizator",i);
	}
}

function validateForm(){
	
	jQuery.validator.setDefaults({
  		debug: true,
  		success: "valid"
	});
	
	form = $("#userForm");
	
	form.validate({
  		rules: {
    		lastname: {
    			required: true,
    			minlength : "3",
    			pattern: "[a-zA-Z]+"
    		},
    		firstname : {
    			required: true,
    			minlength : "3",
    			pattern:"[a-zA-Z]+"
   			 },
   			 email : {
    			required: true,
    			email : true
    		}
  		}
	});
}

function resetCookie(){
	setCookieValue("min","15");
	setCookieValue("sec","0");
	setCookieValue("intrebareCurenta","1");
	setCookieValue("firstName","");
	setCookieValue("lastName","");
	setCookieValue("userEmail","");
	
	for (var i = 1; i <= 10; i++) {
		setCookieValue("rez"+i.toString(),"0,0,0,0,0");
	}
}

function userCheck() {
	
	validateForm();
	
	if (form.valid() == true ) {
		salveazaUtilizator();
		salvareIndexUtilizator();
		location.href='Html/Intrebarea1.html';
	}
}

function adminCheck() {
	
	validateForm();

	if (form.valid() == true ) {
		salveazaUtilizator();
		location.href='Html/AdminPage.html';
	}
}

