const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://anthony-yershov:ftf4PWmZ5bMd3yx@guild-page-lytpr.mongodb.net/todos?retryWrites=true&w=majority',
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});