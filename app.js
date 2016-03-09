'use strict'

// DEPENDENCIAS
const app = require('./app_config');
const userController = require('./controller/user_controller');
const validator = require('validator');

//ROOT
app.get('/', (req, res) => {
	res.render('index', { pageTitle: 'API Restful - Usuários', pageBody: 'Acesse através da URI: "http://127.0.0.1:5000/users/" -  MÉTODOS: GET, POST, PUT, DELETE' });
});

//LISTAR TODOS
app.get('/users', (req, res) => {
	userController.list((resp) => {
			res.json(resp);
	});
});

//LISTA UM USER
app.get('/users/:id', (req, res) => {
	let id = req.params.id;
	userController.user(id, (resp) => {
		res.json(resp);
	});
});

//CRIA UM USER
app.post('/users', (req, res) => {
	let fullname = validator.trim(validator.escape(req.body.fullname));
	let email = validator.trim(validator.escape(req.body.email));
	let password = validator.trim(validator.escape(req.body.password));
	
	userController.save(fullname, email, password, (resp) => {
		res.json(resp);
	});
});

//ATUALIZA UM USER
app.put('/users', (req, res) => {

	let id = validator.trim(validator.escape(req.body.id));
	let fullname = validator.trim(validator.escape(req.body.fullname));
	let email = validator.trim(validator.escape(req.body.email));
	let password	= validator.trim(validator.escape(req.body.password));

	userController.update(id, fullname, email, password, (resp)=>{
		res.json(resp);
	});

});

//REMOVER USUARIO
app.delete('/users/:id', (req, res) => {
	let id = req.params.id;
	userController.delete(id, (resp) => {
		res.json(resp);
	});
});