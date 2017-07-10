var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
var cookie = require('cookie');
var cookieParser = require('cookie-parser');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
var router = express.router;

var dbFunc = require("./api/database_functions");

var basemin1 = '/Users/ankit.s/documents/github/myapp/public/html';

var baseUrl = '/Users/ankit.s/documents/github/myapp/public/html/';

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s ", host, port);

})

console.log(__dirname + '/public');
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(baseUrl));
//app.use(express.static(basemin1));
app.use(express.static('public'));

app.get("/", function(req, res) {
	res.sendFile(baseUrl + 'home.html');
	console.log("homepage get request");
	//next();



})
var p1 = function(req, res, next) {
		console.log("got a get request");

		var dbFunc = require("./api/database_functions");
		var verify_data = dbFunc.a.m2;

		verify_data(req.query, function(e, r) {
				if (e) {
					return next(e);
				}

				if (!Array.isArray(r)) {
					return next("This is not array");
				}

				if (r.length == 0) {
					return next("No login details found in DB");
				} else {
					r = r[0];
				}

				console.log('Got response from mysql query =>');
				console.log(r);
				console.log("just checking");
				console.log(r.password + "----" + req.query.password);

				if (r.password == req.query.password) {

					
						
       //var setcookie=cookie.serialize('login_id', 'req.login_id'	);

            //res.send("you are logged in !!");

            res.cookie('req.login_id','req.password');




							//var cookie=require('cookie');	

							//var cookies = cookie.parse(req.headers.cookie || '');

							// Get the visitor name set in the cookie 
							//var name = cookies.login_id;


							//if (name) {
							//res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>');
							//} else {
							//res.write('<p>Hello, new visitor!</p>');
							//var setcookie=cookie.serialize('login_id', 'req.login_id'	);
							console.log('in if condition');
							res.send("you are logged in !!");

						}
						// Set cookie



					
					else {
						console.log('in else condition');
						res.sendFile(baseUrl + 'home.html');
					}

					return next();
				})
			/*console.log("get response from sql query");

			var user = req.query.username;
			var temp_pwd = req.query.password;
			console.log(req.query);

			/*if (result[0].password == temp_password) {
				res.sendFile("/Users/ankit.s/Documents/GitHub/myapp/public/html/login.html");
			} else {
				res.sendFile(baseUrl + 'home.html');

			}*/

		};
		var p2 = function(err, req, res, next) {
			if (err) {
				console.log("error present");
				console.error(err);
			}
		};

		app.get("/html/login", p1, p2);


		var m1 = function(req, res, next) {
			console.log("get a post request");
			res.send("you can login now !!");
			console.log("body params", req.body);
			var dbFunc = require("./api/database_functions");

			//console.log(dbFunc.a.m1.toString());

			//console.log('log before');
			//var insert_data = dbFunc.insert_function;
			var insert_data = dbFunc.a.m1;



			//insert_data(req.body);
			//insert_data(req, res, err);

			insert_data(req.body, function(e, r) {
				if (e) {
					return next(e);
				}
				console.log('Got response from mysql query =>');
				console.log(r);
				res.res_data = {};
				res.res_data.m1Resp = r;
				return next();
			})

		};


		var m2 = function(err, req, res, next) {
			if (err) {
				console.log("error present");
				console.error(err);
			}
		};

		//app.post("/html/signup",)
		app.post("/html/signup", m1, m2);


		// app.get('/login/:id/:password',function(req,res)
		// {
		// 	console.log("got a get request");

		// 	console.log(req.params);

		// 	res.send('hello get');
		// })

		/*app.get('/signup',function(req,res)
		{
			res.sendFile('/Users/ankit.s/Documents/login');
			console.log("got a get request");
			res.send('hello get');
		})*/