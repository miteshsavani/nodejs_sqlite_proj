import { createUserInDb, allUsers, updateUserDetails, deleteUserFromDb, getUserFromDb } from '../data/users/index.js';

let users = [];

export const getAllUsers = (req, res) => {
	allUsers().then((data) => {
		return successResult(res, data);
	});
};

export const getUser = (req, res) => {
	const reqUserId = req.params.id;
	getUserFromDb(reqUserId).then((data) => {
		return successResult(res, data);
	});
};

export const createUser = async (req, res) => {
	const newUser = req.body;

	if (!newUser.firstName || !newUser.lastName) {
		return errorMessage(res, 400, 'You must supply firstname and lastname');
	}

	createUserInDb(newUser)
		.then((data) => {
			return successResult(res, data);
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const updateUserInfo = (req, res) => {
	const updatedUser = req.body;
	const reqUserId = req.params.id;

	updateUserDetails({ ...updatedUser, id: reqUserId }).then(data => {
		return successResult(res, data);
	}).catch(err => {
		console.log(err.message);
	})

};

export const deleteUser = (req, res) => {
	const reqUserId = req.params.id;

	deleteUserFromDb(reqUserId).then(data => {
		return successResult(res, data);
	}).catch(err => {
		return errorMessage(res, 204, err.message);
	})
};

function successResult(response, result) {
	return response.status(200).json({
		result,
	});
}

function errorMessage(response, responseStatus, message) {
	return response.status(responseStatus).json({
		error: {
			message: message,
		},
	});
}
