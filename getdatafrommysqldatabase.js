var express=require("express");
var app=express();
var mysql=require("mysql");

var con=mysql.createConnection({
	host:"localhost",
	user:"{username}",
	password:"{Password}",
	database:"{DatabaseName}"
	
})
con.connect();
app.get("/nametocode",function(req,res){ /*localhost:3000/nametocode/*/
	con.query("select * from nametocode",function(err,rows,fields){ /*Query to get data from database*/
	    if(err)throw err;
		console.log("rows:"+rows.length);
		res.json(rows); /*Response in json format*/
	});
	
});

app.listen(3000,function(err,data){
	console.log("Server Running");
});