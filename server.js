var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var todos = [
    {
    	id:1,
    	description: "Good Morning",
    	TORF: false
    },
    {
    	id:2,
    	description: "Good Afternoon",
        TORF: false
    },
    {
    	id:3,
    	description: "Good Evening",
    	TORF: true
    }	
];


app.get("/todos",function(req,res){
	res.json(todos);
})

app.get("/todos/:id",function(req,res){
	var matchedID;
	var todoID = parseInt(req.params.id);
	todos.forEach(function(todo){
		if (todoID === todo.id ){
			matchedID = todo;
		}
	});
		if(matchedID){
			res.json(matchedID);
		}else{
            res.status(404).send();
		}
	
});

app.get('/',function(req,res){
	res.send("Todo API Root");
});

app.listen(PORT,function(req,res){
	console.log("Express listening on port 3001");
});