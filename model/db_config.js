'use strict'

//CONFIG MONGO
const db_string = 'mongodb://127.0.0.1/rest/';
const mongoose = require('mongoose').connect(db_string);
const db = mongoose.connection;
let User;

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco'));
db.once('open', () => {
	const userSchema = mongoose.Schema({
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});
	exports.User = mongoose.model('User', userSchema);
});
