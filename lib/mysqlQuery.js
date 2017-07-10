'use strict';

var mysql = require('mysql');
var log = require('metalogger')();

//var config = require('./../../config/index');
var config = require('./../config');

var temp = config;

var dbConf = {
	host: temp.host,
	user: temp.user,
	password: temp.password,
	database: temp.database
};

// var dbConf = {
// 	host: temp.MYSQLDBHostname,
// 	user: temp.MYSQLDBUsername,
// 	password: temp.MYSQLDBPassword,
// 	database: temp.MYSQLDBName
// };

var mysqlQuery = {

	run: function(query, cb) {
		log.debug('in run');

		var connection = mysql.createConnection(dbConf);

		connection.connect(function(err) {
			if (err) {
				//console.error('DB connection error from server/temp_model/uri_key_map  ' + err.stack);
				return;
			}
			//console.log('DB connection made from server/temp_model/uri_key_map '); // + connection.threadId);
		});

		connection.query(query, function(error, results, fields) {

			connection.end();
			if (error) {
				console.log("getting error");
				return cb(error, null);
			}

			// results.forEach(function(row){
			// 	obj[row.c_id] = row.name;
			// });

			return cb(null, results);
		});
	}
}

module.exports = mysqlQuery.run;

///////////////////////////// TEST CODE /////////////////////////////////////