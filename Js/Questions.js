var nrIntrebari=10;
var table="";
var i;

$(document).ready(function(){
    	
        disableBack();

        i=getCookieValueByKey("intrebareCurenta");
    	i=parseInt(i);
    	
        countdown(getCookieValueByKey("min"),getCookieValueByKey("sec"));
    	
        getJson(i-1);
    	
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
            setUsersStandings();
   		})
            

        $('input:radio').click(function(){
            switch($(this).attr('id')){
                case 'inputVarianta1' : checkRadio(0); break;
                case 'inputVarianta2' : checkRadio(1); break;
                case 'inputVarianta3' : checkRadio(2); break;
                case 'inputVarianta4' : checkRadio(3); break;
                case 'inputVarianta5' : checkRadio(4); break;
        }
        })
    
        $('input:checkbox').click(function(){
            switch($(this).attr('id')){
                case 'inputVarianta1' : checkCheckBox(0); break;
                case 'inputVarianta2' : checkCheckBox(1); break;
                case 'inputVarianta3' : checkCheckBox(2); break;
                case 'inputVarianta4' : checkCheckBox(3); break;
                case 'inputVarianta5' : checkCheckBox(4); break;
            }
        })
    
   		    	
});

   

function disableBack(){
    window.onload = window.history.forward();
        window.onpageshow = function(evt) {
             if (evt.persisted){
                window.history.forward();
             } 
         }
}

        
