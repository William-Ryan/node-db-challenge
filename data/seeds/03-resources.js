
exports.seed = function(knex) {
  
  return knex('resources').insert([
    {resource_name: 'Awesome Computer', resc_description:'16 GBs of RAM oh yeah'},
    {resource_name: 'Tranq Darts', resc_description:'Its super effective!'},
    {resource_name: 'Sponge', resc_description:'Gonna be getting worked'}
  ])
};
