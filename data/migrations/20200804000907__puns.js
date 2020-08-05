
exports.up = function(knex) {
  return knex.schema.createTable('puns', tbl => {
      tbl.increments()
      tbl.string('author', 100).notNullable()
      tbl.string('pun', 5000).notNullable()
      tbl.integer('likes').notNullable()
      tbl.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('SET NULL')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('puns')
};
