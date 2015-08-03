var nrIntrebari=10;

$(document).ready(function(){
    	var i=getCookieValueByKey("intrebareCurenta");
    	i=parseInt(i);
    	
        countdown(getCookieValueByKey("min"),getCookieValueByKey("sec"));
    	//getJson(i);
        getQuestionAndAnswers(i-1);
    	
        if(getCookieValueByKey("rez"+i.toString()) == undefined){
    		setCookieValue("rez"+i.toString(),"0,0,0,0,0");
    	} 
   		reCheck(getCookieValueByKey("rez"+i.toString()));
   		
        $("button#prev").click(function(){
			if(i>1){
				setCookieValue("min",getMinutes());
				setCookieValue("sec",getSeconds());
				setCookieValue("rez"+i.toString(),getRez());
				i--;
				setCookieValue("intrebareCurenta",i);
				location.href="Intrebarea"+(i).toString()+".html";
			}else{
				alert("Aceasta este prima intrebare");
			}
   		})
    	
        $("button#next").click(function(){
			setCookieValue("min",getMinutes());
			setCookieValue("sec",getSeconds());
			setCookieValue("rez"+i.toString(),getRez());
			
            if (i<10){
				i++;
				setCookieValue("intrebareCurenta",i)
				location.href="Intrebarea"+(i).toString()+".html";
			}
            else{
				alert("Aceasta este ultima intrebare");
			}
   		})
    	
        $("button#final").click(function(){
            setCookieValue("rez"+i.toString(),getRez());
			location.href="Rezultat.html";
   		})
   		
        $('input:radio').click(function(){
            switch($(this).attr('id')){
                case 'a' : checkRadio(0); break;
                case 'b' : checkRadio(1); break;
                case 'c' : checkRadio(2); break;
                case 'd' : checkRadio(3); break;
                case 'e' : checkRadio(4); break;
            }
        })
       
        $('input:checkbox').click(function(){
            switch($(this).attr('id')){
                case 'a' : checkCheckBox(0); break;
                case 'b' : checkCheckBox(1); break;
                case 'c' : checkCheckBox(2); break;
                case 'd' : checkCheckBox(3); break;
                case 'e' : checkCheckBox(4); break;
            }
    	})
    	
});
