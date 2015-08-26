$('#example').DataTable({
       
        "ajax": "http://172.30.0.141:8080/spring/JsonQuestions",
        "columns": [
            { "data": "id" },
            { "data": "question" },
            { "data": "A" },
            { "data": "B" },
            { "data": "C" },
            { "data": "D" },
            { "data": "E" }
        ]

    });

