import https from 'https';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user.js';
import fs from 'fs';


// API testing
// Postman link: https://blue-robot-222646.postman.co/workspace/Node_sqlite_API~2539a512-6ac7-428a-af50-a6c9f7447d54/overview

const PORT = process.env.PORT || 8888;
const app = express();

// const options = {
// 	key: fs.readFileSync('server.key'), 
// 	cert: fs.readFileSync('server.cert')
// }
const options = {};
//const server = https.createServer(options, app);


app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
	return welcomePage(res);
});
app.use('/users', userRoutes);


app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT} port`);
});



function welcomePage(res) {
	const response = 
		`<div style="display:flex; align-items: center; justify-content: center">
			<h1>Welcome to Node js Sqlite API project</h1>
		</div>`;

	res.send(response);

}