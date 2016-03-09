'use strict'

const express = require('express');
const userController = require('../controller/user_controller');
const validator = require('validator');
const router = express.Router();

//LISTAR TODOS
router.get('/users', (req, res) => {
	userController.list((resp) => {
			res.json(resp);
	});
});

//LISTA UM USER
router.get('/users/:id', (req, res) => {
	let id = req.params.id;
	userController.user(id, (resp) => {
		res.json(resp);
	});
});

//CRIA UM USER
router.post('/users', (req, res) => {
	let fullname = validator.trim(validator.escape(req.body.fullname));
	let email = validator.trim(validator.escape(req.body.email));
	let password = validator.trim(validator.escape(req.body.password));
	
	userController.save(fullname, email, password, (resp) => {
		res.json(resp);
	});
});

//ATUALIZA UM USER
router.put('/users', (req, res) => {

	let id = validator.trim(validator.escape(req.body.id));
	let fullname = validator.trim(validator.escape(req.body.fullname));
	let email = validator.trim(validator.escape(req.body.email));
	let password	= validator.trim(validator.escape(req.body.password));

	userController.update(id, fullname, email, password, (resp)=>{
		res.json(resp);
	});

});

//REMOVER USUARIO
router.delete('/users/:id', (req, res) => {
	let id = req.params.id;
	userController.delete(id, (resp) => {
		res.json(resp);
	});
});

module.exports = router;