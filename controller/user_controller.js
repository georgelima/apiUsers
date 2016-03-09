'use strict'

const db = require('../model/db_config');

exports.list = (callback) => {
	
	db.User.find({}, (err, users) => {
		if (err){
			callback({ erro: 'Erro ao listar usuários' });
		}else {
			callback(users);	
		}
	});

} 

exports.user = (id, callback) => {

	db.User.findById({ _id: id }, (err, user) => {
		if (err){
			callback({ erro: 'Erro ao mostrar usuário' });
		}else {
			callback(user);
		}
	});

} 

exports.save = (fullname, email, password, callback) => {

	new db.User({
		'fullname': fullname,
		'email': email,
		'password': password,
		'created_at': new Date(),
	}).save((err, user) => {
		if (err){
			callback({ error: 'Não foi possivel cadastrar o usuario!' });
		}else {
			callback({OK: 'Usuário ' + user.fullname + ' criado!'});
		}
	});

} 

exports.update = (id, fullname, email, password, callback) => {
	
	db.User.findById(id, (err, user) => {
		if (err){
			res.json({ erro: 'Usuário não localizado' });
		}else {
			if (fullname) {
				user.fullname = fullname;
			}	
			if(email) {
				user.email = email;
			}
			if (password) {
				user.password = password;
			}

			user.save((err, user) => {
				if (err){
					callback({ erro: 'Não foi possivel atualizar o usuário' })
				}else {
					callback(user);
				}
			});
		}
	});

} 

exports.delete = (id, callback) => {
	db.User.findById(id, (err, user)=>{
		if (err){
			callback({ erro: 'Não foi possivel localizar o usuario' });
		}else {
			db.User.remove(user, (err) => {
				if (!err) {
					callback({ response: 'Usuário removido com sucesso' });
				}
			});
		}
	});
} 