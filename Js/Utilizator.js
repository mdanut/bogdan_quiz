
var firstName;
var lastName;
var userEmail;
var i;
var formular;

$(document).ready(function(){
    resetCookie();
    formular=$("#userForm");
    formular.validate();
    $("button").click(function(){
		userCheck();
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
	if (formular.valid() == true ) {
		salveazaUtilizator();
		salvareIndexUtilizator();
		location.href='Html/Intrebarea1.html';
	}
}
