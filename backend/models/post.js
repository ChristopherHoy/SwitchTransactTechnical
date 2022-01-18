var Sequelize = require('sequelize');

// database, user and password are all the same
// Uses mysql
var sequelize = new Sequelize(
    'switch_transact',
    'switch_transact',
    'switch_transact',
    {
        dialect: 'mysql',
        host: "localhost",
        port: 3306
    }
);

// Create post model using connection
// Disable the timestamps
let Post = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
         type: Sequelize.STRING,
    },
    description: {
         type: Sequelize.TEXT,
    },
    date: {
         type: Sequelize.DATE,
    },
    status: {
         type: Sequelize.STRING,
    },
}, {timestamps: false})

module.exports = Post;
