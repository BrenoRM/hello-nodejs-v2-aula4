"use strict"
const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); // olha a macumba..

// queremos um nome para este cachorro

if(!process.argv[2]){
  console.log("usage: node cademeucatiorro.js <nome>");
  process.exit(0);
}

let nome = {
  nome: process.argv[2]
};

knex.raw("select * from cachorro where nomecachorro = (:nome)", nome).then((ret) =>   
    {
        let i = ret.length;
        while(i--){
        console.log(ret[i]);
        }
        process.exit(0);
    }
);