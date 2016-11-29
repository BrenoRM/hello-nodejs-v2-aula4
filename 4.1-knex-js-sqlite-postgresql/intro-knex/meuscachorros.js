const knexfile = require('./knexfile')["development"];
const knex = require("knex")(knexfile); // olha a macumba..

// queremos um nome para este cachorro
if(!process.argv[3]){
  console.log("usage: node hello-knex-8.js <nome> <marca>");
  process.exit(0);
}

// inserir cachorro
knex("cachorro").insert({
  nomecachorro:process.argv[2],
  marcacachorro:process.argv[3]
},"idcachorro").then((ret) => {
  console.log(`cachorro inserido com a chave ${ret[0]}`);
  process.exit(0);
}).catch((err)=>{
  console.log(err);
  process.exit(1);
});