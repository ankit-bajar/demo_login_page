var runMySqlQuery = require('./../lib/mysqlQuery');

// var pathabs = __dirname + "/sql_query";
// console.log(pathabs);

// var path = require('path');
// // var pathabs= 
// pathabs = path.resolve(__dirname, "./sql_query.js");
// console.log(pathabs);

// var haha = require(pathabs);

// var haha = require("./sql_query");

// console.log('requiring haha from root');
// console.log(typeof(haha));

// console.log(JSON.stringify(haha));

// console.log(haha.toString());
// console.log(haha.insert_query);
var insert_function=function(userData, cb) {
    console.log("inside m1");

    // if(!err)
    //   {console.log("all okkk")}
    // else
    //   {console.log("all not okk")}

    var today = new Date();



    var user = {

      "first_name": userData.first_name,
      "last_name": userData.last_name,
      "email": userData.email,
      "password": userData.password,
      //"created": today

    };

    console.log("instart");
    var haha = require("./sql_query");
    //var haha = require("./sql_query").insert_query;

    console.log("haha is ->");
    console.log(haha.toString());

    var query = haha.insert_query(user);

    //var query=require("./sql_query").insert_query(user);

    console.log("inbetween");

    runMySqlQuery(query, cb);
  }

var a = {
  "m1": function(userData, cb) {
    console.log("inside m1");

    // if(!err)
    //   {console.log("all okkk")}
    // else
    //   {console.log("all not okk")}

    var today = new Date();



    var user = {

      "first_name": userData.first_name,
      "last_name": userData.last_name,
      "email": userData.email,
      "password": userData.password,
      //"created": today

    };

    console.log("instart");
    var haha = require("./sql_query");
    //var haha = require("./sql_query").insert_query;

    console.log('haha is ->');
    console.log(haha.toString());

    var query = haha.insert_query(user);

    //var query=require("./sql_query").insert_query(user);

    console.log("inbetween");

    runMySqlQuery(query, cb);
  },

  "m2": function(userdata, cb) {
    console.log("inner verificaiton");
    console.log(userdata);
    //var query1=require("./sql_query").verification_query(userdata);
    console.log('m1');
    //var haha = require("./sql_query");
    var haha = require("./sql_query");
    console.log('queryHaha is ->');
    console.log(haha.toString());

    console.log('m2');
    var query1 = haha.verification_query(userdata);
    console.log('m3');
    console.log(query1);

    // console.log("lol is -->");
    // console.log(lol);
    runMySqlQuery(query1, cb);
    //return lol(userdata.email);
  }
}

module.exports = {a,insert_function};
