const express = require('express');
const app = express();
const port = 443;
const projectsRouter = require('./routes/projectsRouter');

const cors = require('cors');

app.use(cors());
app.use('/projects', projectsRouter);

app.listen(port, () => {console.log('Listening on port: ',port)} );