exports.up = function(knex) {
    return knex.schema.createTable('liked', tbl => {
        tbl.increments()
        tbl.boolean('liked').defaultTo(false)
        tbl.boolean('disliked').defaultTo(false)
        tbl.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl.integer('pun_id')
        .unsigned()
        .references('id')
        .inTable('puns')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('liked')
  };
