
exports.up = function(knex, Promise) {
  return knex.table("cachorro").insert(
      {
          nomecachorro:"Totó",
          idcachorro:2
        }).then(() => 
        {
            console.log("Cachorro 2 inserido");
            return knex.table("cachorro").insert(
                {
                    nomecachorro:"Baleia",
                    idcachorro:3
                }).then(() =>
                {
                    console.log("Cachorro 3 inserido");
                }
            );    
        }
    );
};

exports.down = function(knex, Promise) {
    return knex.table("cachorro").del().where(
      {
          idcachorro:2
        }).then(() => 
        {
            console.log("Cachorro 2 deletado");
            return knex.table("cachorro").del().where(
                {
                    idcachorro:3
                }).then(() =>
                {
                    console.log("Cachorro 3 deletado");
                }
            );    
        }
    );
  
};
