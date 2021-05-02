const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: String,
    ptech: [
        String
    ],
    links: {
        github: String,
        web: String
    }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;