document.cookie.Domain = null;

function setCookie(cname,cvalue) {
    document.cookie =cname+"="+cvalue;
}

function getCookie(cname) {
	var name;
	var value;
   	var allcookies=document.cookie;
    cookiearray = allcookies.split(';');
    for(var i=0; i<cookiearray.length; i++){
        name=cookiearray[i].split('=')[0];
        value=cookiearray[i].split('=')[1];
        if (name == cname ) {
        	return value;
        }
	}
}
