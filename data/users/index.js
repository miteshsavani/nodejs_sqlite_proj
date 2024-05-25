import loadSqlQueries from '../utils.js';
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'userData.db');

const TEST_DATA = {
	userDummy1: { firstName: 'Mitesh', lastName: 'Savani' },
};

const createUserInDb = async (userDetails) => {
	const sqlQueries = await loadSqlQueries('users');
	const db = new Database(dbPath);

	const insert = db.prepare(sqlQueries.createUser);
	const result = insert.run(userDetails);

	const response = { message: 'Error while creating user' };
	if (result.changes) {
		response.message = 'User Created!';
	}

	return response;
};

const allUsers = async () => {
	const sqlQueries = await loadSqlQueries('users');
	const db = new Database(dbPath);
	const result = db.prepare(sqlQueries.userList).all();

	const response = {
		message: 'Error while fetching user',
		data: [],
	};

	if (result) {
		response.message = 'Success';
		response.data = result;
	}
	return response;
};

const updateUserDetails = async (updatedUser) => {
	const sqlQueries = await loadSqlQueries('users');
	const db = new Database(dbPath);

	console.log('updatedUser', updatedUser);
	const result = db.prepare(sqlQueries.updateUser).run(updatedUser);

	const response = { message: 'Error while updating user' };
	if (result.changes) {
		response.message = 'User Details Updated!';
	}

	return response;
};

const getUserFromDb = async (id) => {
	const sqlQueries = await loadSqlQueries('users');
	const db = new Database(dbPath);

	const result = db.prepare(sqlQueries.getUser).all({ id });

	const response = { message: 'user Not present', data: [] };
	if (result) {
		response.message = 'Success';
		response.data = result;
	}

	return response;
};

const deleteUserFromDb = async (id) => {
	const sqlQueries = await loadSqlQueries('users');
	const db = new Database(dbPath);

	const result = db.prepare(sqlQueries.deleteUser).run({ id });
	const response = { message: 'user Not present' };

	if (result.changes) {
		response.message = 'User Deleted!!!';
	}

	return response;
};

export { createUserInDb, allUsers, updateUserDetails, getUserFromDb, deleteUserFromDb };
