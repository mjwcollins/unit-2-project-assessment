var express = require('express');
var router = express.Router();

const todoCtrl = require('../controllers/todos');

/* GET home page. */
router.get('/', todoCtrl.index);
router.post('/', todoCtrl.create);
router.put('/:id', todoCtrl.update);
router.delete('/:id', todoCtrl.delete);

module.exports = router;
