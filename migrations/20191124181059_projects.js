
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.text('name',128)
      .notNullable();
      tbl.text('description');
      tbl.boolean('completed')
      .notNullable();
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description', 200)
      .notNullable();
      tbl.text('notes', 300)
      tbl.boolean('completed')
      .notNullable();
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references()
      .inTable('projects');

  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.text('name', 128)
    .notNullable();
    tbl.text('description', 200);
})
.createTable('project_resources', tbl => {
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('projects.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
    
    tbl.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('resources.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
    tbl.primary(['resource_id', 'project_id'])
})
};

exports.down = function(knex) {
    return (
        knex.schema
          .dropTableIfExists('project_resources')
          .dropTableIfExists('resources')
          .dropTableIfExists('tasks')
          .dropTableIfExists('projects')
          
    )
};
