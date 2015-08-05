

var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function(){
    editor = new $.fn.dataTable.Editor( {
        ajax: "../Js/Intrebari.json",
        table: "#example",
        fields: [
        	{
                label: "Id:",
                name: "id"
            },
        	{
                label: "Intrebare:",
                name: "intrebare"
            },
            {
                label: "Varianta A:",
                name: "varA"
            },
            {
                label: "Varianta B:",
               	name: "varB"
            },
            {
                label: "Varianta C:",
                name: "varC"
            },
            {
                label: "Varianta D:",
                name: "varD"
            },
            {
                label: "Varianta E:",
                name: "varE"
            }
        ]
    });

    $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
        editor.inline( this );
    });
 
    $('#example').DataTable({
        dom: "Tfrtip",
        ajax: "../Js/Intrebari.json",
        columns: [
        	{ data: "id"},
            { data: "intrebare" },
            { data: "varA" },
            { data: "varB" },
            { data: "varC" },
            { data: "varD" },
            { data: "varE"}
        ],
        tableTools: {
            sRowSelect: "os",
            sRowSelector: 'td:first-child',
            aButtons: [
                { sExtends: "editor_create", editor: editor },
                { sExtends: "editor_edit",   editor: editor },
                { sExtends: "editor_remove", editor: editor }
            ]
        }
    });
});


