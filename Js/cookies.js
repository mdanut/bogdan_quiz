document.cookie.Domain = null;

function setCookie(cname,cvalue) { /*----------------------REDENUMESTE FUNCTIA IN setCookieValue-------------------------------*/
    document.cookie =cname+"="+cvalue; /*----------------------LASA CATE UN SPATIU INAINTE SI DUPA +-------------------------------*/
}

function getCookie(cname) { /*----------------------REDENUMESTE FUNCTIA IN getCookieValueByKey-------------------------------*/
	var name;
	var value;
   	var allcookies=document.cookie;
    cookiearray = allcookies.split(';'); /*---------------------LASA UN RAND LIBER------------------------------*/
    for(var i=0; i<cookiearray.length; i++){
        name=cookiearray[i].split('=')[0];
        value=cookiearray[i].split('=')[1]; /*---------------------LASA UN RAND LIBER------------------------------*/
        if (name == cname ) {
        	return value;
        }
	}
}
