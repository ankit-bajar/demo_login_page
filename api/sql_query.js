//'use strict';

var moment = require('moment');

function insertQueryBuilder(tableName, args) {

	console.log('inside insertQueryBuilder');

	var query = 'insert into `' + tableName + '` values(null,';

	Object.keys(args).forEach(function(key) {
		console.log('key => ' + key);
		query += '"' + args[key] + '",';
	});

	query = query.substring(0, query.length - 1);

	query += ')';

	return query;
}

console.log('hi babb i am here');



var queryhaha = {
	"insert_query" : function(temp) {
		var today = new Date();
		var temp1 = {
			"first_name": temp.first_name,
			"last_name": temp.last_name,
			"email": temp.email,
			"password": temp.password ,
			"created": moment().format('YYYY-MM-DD HH:mm:ss')
		};

		console.log('going to call insertQueryBuilder');
		var q = insertQueryBuilder('users', temp1);
		console.log('query parsed is =>');
		console.log(q);

		return q;

	}

	,
	"verification_query": function(temp) {
		console.log("playing with query ");
		console.log(temp);
        
		var query = 'select password from `users` where email =' + '"'+temp.login_id+'"';
		return query;

	}
};




module.exports = queryhaha;