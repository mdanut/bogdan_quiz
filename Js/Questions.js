var nrIntrebari=10;

$(document).ready(function(){
    	var i=getCookieValueByKey("intrebareCurenta");
    	i=parseInt(i);
    	
        countdown(getCookieValueByKey("min"),getCookieValueByKey("sec"));
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
   		
		/*----------------------------FOLOSESTE DOAR O FUNCTIE DE CLICK PENTRU TOATE CELE 5 BUTOANE RADIO--------------------------------*/
        $('input:radio').click(function(){
    		checkRadio(0);
    	})
    	
        $('input:radio#b').click(function(){
    		checkRadio(1);
    	})
    	
        $('input:radio#c').click(function(){
    		checkRadio(2);
    	})
    	
        $('input:radio#d').click(function(){
    		checkRadio(3);
    	})
    	
        $('input:radio#e').click(function(){
    	   checkRadio(4);
    	})
    	
		/*----------------------------FOLOSESTE DOAR O FUNCTIE DE CLICK PENTRU TOATE CELE 5 BUTOANE CHECK BOX--------------------------------*/
        $('input:checkbox#a').click(function(){
    		checkCheckBox(0);
    	})
    	
        $('input:checkbox#b').click(function(){
    		checkCheckBox(1);
    	})
    	
        $('input:checkbox#c').click(function(){
    		checkCheckBox(2);
    	})
    	
        $('input:checkbox#d').click(function(){
    		checkCheckBox(3);
    	})
    	
        $('input:checkbox#e').click(function(){
    		checkCheckBox(4);
    	})
});