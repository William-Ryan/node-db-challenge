
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments()

    tbl.varchar('project_name', 100)
        .notNullable()

    tbl.text('project_description')

    tbl.boolean('completed')
        .defaultTo(false)
  })
  .createTable('tasks', tbl => {
    tbl.increments()

    tbl.text('task_description')
        .notNullable()

    tbl.text('notes')

    tbl.boolean('completed')
        .defaultTo(false)
    
    tbl.integer('projects_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
  })
  .createTable('resources', tbl => {
      tbl.increments()

      tbl.varchar('resource_name', 100)
        .notNullable()

      tbl.text('resc_description')
  })
  .createTable('project_resources', tbl => {
      tbl.primary(['project_id', 'resource_id']);

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
