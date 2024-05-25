import { allUsers, updateUserDetails, getUser, deleteUserFromDb } from '../data/users/index.js';

function GetAllUsersData() {
	allUsers().then((res) => {
		console.log(res);
	});
}

function testUpdateUserDetails() {
	updateUserDetails({
		id: 2,
		firstName: 'Mitesh',
		lastName: 'SSSS',
		gender: 'male',
        mobileNumber: '232323'
	}).then((res) => {
		console.log(res);
	});
}

function testgetUser() {
    getUser('2').then(res => {
        console.log(res);
    })
}

function testDeleteUser() {
    deleteUserFromDb('4').then(res => {
        console.log(res);
    })
}


//testUpdateUserDetails();
//testgetUser();

testDeleteUser();