
exports.seed = function(knex) {

  return knex('projects').insert([
    {project_name: 'Complete the Sprint', project_description: 'Within 3 hours plus stretch', completed: true},
    {project_name: 'Take much needed R and R', project_description: 'Right after this sprint', completed: false},
    {project_name: 'Do a loads of dishes', project_description: 'Dear god the backlog', completed: false}
  ])
};
