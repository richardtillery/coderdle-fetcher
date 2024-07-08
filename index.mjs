// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const mysql = require('mysql');

import mysql from 'mysql';
import { createServer } from 'node:http';

//const hostname = '127.0.0.1';
const hostname = process.env.HOST;
const port = 3001;
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "WORD"
    //database: "coderdle"
 });    

const server = createServer((req, res) => {

     return new Promise((resolve, reject) => {
         con.connect(function (err) {
             if (err) {
                resolve(['CODER']); //defaulting if mysql is down/unreachable
             } else {
                con.query(`SELECT word FROM words;`, function (err, results) {
                    if (err) reject('ERROR');          
                    resolve(results.map(r => r.word));
                 });    
             }
          });     
     }).then(response => {
         if (con) con.end();
         if (response === 'ERROR') {
            res.statusCode = 500;
         } else {
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.end(response[0]);
         }
         console.log('Returning response ' + res);
         return res;
        })
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/**
export const handler = async(event) => {

    console.log("Coderdle Fetcher Invoked...");
    var con = mysql.createConnection({
       host: process.env.HOST,
       user: process.env.USER,
       password: process.env.PASS,
       database: "WORD"
       //database: "coderdle"
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
**/
