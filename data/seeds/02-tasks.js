
exports.seed = function(knex) {
  
  return knex('tasks').insert([
    {task_description: 'Go big brain on the code', notes: 'If possible do it well', completed: true, projects_id: 1},
    {task_description: 'Pray the kids both take naps', notes: 'It likely will not help', completed: false, projects_id: 2},
    {task_description: 'Use massive elbow grease', notes: 'Should probably hire a maid', completed: false, projects_id: 3}
  ])
};
