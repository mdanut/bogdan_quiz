var nrIntrebari=10;

$(document).ready(function(){
    	var i=getCookie(' intrebareCurenta');
    	i=parseInt(i);
    	
        countdown(getCookie('min'),getCookie(' sec'));
    	getQuestionAndAnswers(i-1);
    	
        if(getCookie(' rez'+i.toString()) == undefined){
    		setCookie('rez'+i.toString(),'0,0,0,0,0');
    	} 
   		reCheck(getCookie(' rez'+i.toString()));
   		
        $("button#prev").click(function(){
			if(i>1){
				setCookie('min',getMinutes());
				setCookie('sec',getSeconds());
				setCookie('rez'+i.toString(),getRez());
				i--;
				setCookie('intrebareCurenta',i);
				location.href='Intrebarea'+(i).toString()+'.html'
			}else{
				alert("Aceasta este prima intrebare");
			}
   		})
    	
        $("button#next").click(function(){
			setCookie('min',getMinutes());
			setCookie('sec',getSeconds());
			setCookie('rez'+i.toString(),getRez());
			
            if (i<10){
				i++;
				setCookie('intrebareCurenta',i)
				location.href='Intrebarea'+(i).toString()+'.html';
			}
            else{
				alert("Aceasta este ultima intrebare");
			}
   		})
    	
        $("button#final").click(function(){
            setCookie('rez'+i.toString(),getRez());
			location.href='Rezultat.html';
   		})
   		
        $('input:radio#a').click(function(){
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