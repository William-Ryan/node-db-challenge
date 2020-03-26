const db = require('../data/knex-config')

module.exports = {
    addRescs,
    findRescs,
    addPros,
    findPros,
    addTasks,
    findTasks
}

function addRescs(data){
    return db('resources')
    .insert(data)
}

function findRescs(){
    return db('resources')
}

function addPros(data){
    return db('projects')
    .insert(data)
}

function findPros(){
    return db('projects')
}

function addTasks(data){
    return db('tasks')
    .insert(data)
}

function findTasks(){
    return db('tasks as t')
    .select('t.*', 'p.project_name','p.project_description')
    .join('projects as p', 't.projects_id', '=', 'p.id')
}