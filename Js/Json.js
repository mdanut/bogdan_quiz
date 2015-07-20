var text = '{"Questions":[' +
'{"Intrebare":"1.Choose the correct HTML element for the largest heading:","var1":"&lt;h6&gt;","var2":"&lt;h1&gt;","var3":"&lt;head&gt;","var4":"&lt;heading&gt;","var5":"&lt;&quot;heading&quot;&gt;"},'+
'{"Intrebare":"2.Care din urmatoarele functii citeste intreg continutul unui fisier ?","var1":"file_get_contents() ","var2":"readfile()","var3":"file()","var4":"fgets()","var5":" fread()" },' +
'{"Intrebare":"3.What is the correct HTML for making a checkbox ?","var1":"&lt;input type=&quot;check&quot;&gt;","var2":"&lt;check&gt;","var3":"&lt;input type=&quot;checkbox&quot;&gt;","var4":"&lt;checkbox&gt;","var5":"&lt;input &quot;checkbox&quot;&gt;"},'+
'{"Intrebare":"4.Inside which HTML element do we put the JavaScript ?","var1":"&lt;js&gt;","var2":"&lt;script&gt;","var3":"&lt;javascript&gt;","var4":"&lt;scripting&gt;","var5":"&lt;&quot;javascript&quot;&gt;"},'+
'{"Intrebare":"5.Where is the correct place to insert a JavaScript ?","var1":"The &lt;head&gt; section ","var2":"Both the &lt;head&gt; section and the &lt;body&gt; section are correct","var3":"The &lt;body&gt; section","var4":"JavaScript file can not be written in a html file","var5":"in the &lt;html&gt; section" },' +
'{"Intrebare":"6.What is the correct JavaScript syntax to write &quot;Hello World&quot; ?","var1":"echo &quot;Hello World&quot;;","var2":"document.write(&quot;Hello World&quot;)","var3":"response.write(&quot;Hello World&quot;)","var4":"(&quot;Hello World&quot;)","var5":"echo.write(&quot;Hello World&quot;)"},'+
'{"Intrebare":"7.Which of the following is not a type of constructor ? ","var1":"Copy constructor;","var2":"Friend constructor;","var3":"Default constructor","var4":"Parameterized constructor","var5":"None of the above"},'+
'{"Intrebare":"8.How many instances of an abstract class can be created ?","var1":"7","var2":"14","var3":"Infinite","var4":"0","var5":"3"},'+
'{"Intrebare":"9.Which of the following concepts provides facility of using object of one class inside another class ?","var1":"Encapsulation","var2":"Abstraction","var3":"Composition","var4":"Inheritance","var5":"None of the above"},'+
'{"Intrebare":"10.What is correct about the static data member of a class ?","var1":"A static member function can access only static data members of a class","var2":"A static data member is shared among all the object of the class","var3":"A static data member can be accessed directly from main()","var4":"a b c are true","var5":"None of the above"}]}';

obj=JSON.parse(text);

function getQuestionAndAnswers(i){
	var j=parseInt(i); /*---------------------LASA UN RAND LIBER------------------------------*/
	$("label#intr").html(obj.Questions[j].Intrebare);
	$("label#varianta1").html(obj.Questions[j].var1);
	$("label#varianta2").html(obj.Questions[j].var2);
	$("label#varianta3").html(obj.Questions[j].var3);
	$("label#varianta4").html(obj.Questions[j].var4);
	$("label#varianta5").html(obj.Questions[j].var5);
}


