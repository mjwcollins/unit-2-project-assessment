const Todo = require('../models/todo');

module.exports = {
    index,
    create: createTodo,
    update: updateTodo,
    delete: deleteTodo
}

function index(req, res) {
    Todo.find({})
    .then(todos => {
        res.render('index', { todos })
    }).catch(err => console.log(err));
}

function createTodo(req, res) {
    console.log(req.body);
    Todo.create(req.body)
    .then(todo => {
        res.status(200).send(todo);
    }).catch(err => {
        res.status(304).send('failed to create resource');
    });
}

function updateTodo(req, res) {
    Todo.findById(req.params.id)
    .then(todo => {
        todo.done = req.body.done;
        todo.save(err => console.log(err));
        res.send(200);
    }).catch(err => console.log(err));
}

function deleteTodo(req, res) {
    Todo.findByIdAndDelete(req.params.id)
    .then(todo => res.send(200))
    .catch(err => console.log(err));
}
