"use strict"
const knex = require("./db");

if(!process.argv[2]){
  console.log("usage: node hello-knex-8e.js <nome>");
  process.exit(0);
}

let p = {
  nome: process.argv[2]
};

knex.raw("insert into convidado (nomeconvidado) values (:nome)", p).then(() => {
  // você pode encadear consultas assim
  knex.raw("select * from convidado").then((ret) => {
    let i = ret.length;
    while(i--){
      console.log(ret[i]);
    }
    process.exit(0);
  });
});