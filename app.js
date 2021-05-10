const express = require('express');
const app = express();
const port = 443;
const projectsRouter = require('./routes/projectsRouter');
const contactRouter = require('./routes/contactRouter');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/projects', projectsRouter);
app.use('/contact',contactRouter);

app.listen(port, () => {console.log('API now listening on port: ',port)} );