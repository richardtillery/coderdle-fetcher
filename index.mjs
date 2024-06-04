"use strict";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// const mysql = require('mysql');
import mysql from 'mysql';

export const handler = async(event) => {

    console.log("Coderdle Fetcher Invoked...");
    var con = mysql.createConnection({
       host: process.env.HOST,
       user: process.env.USER,
       password: process.env.PASS,
       database: "coderdle"
    });    

    return await new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) throw err;
            con.query(`SELECT word FROM words;`, function (err, results) {
               if (err) reject('ERROR');          
               resolve(results.map(r => r.word));
            });
         });     
    }).then(response => {
        con.end();
        if (response === 'ERROR') {
            return { statusCode: 500 };
        } else {
            return { statusCode: 200, body: response};
        }
    })
};

