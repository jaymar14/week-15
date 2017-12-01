// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration
var Book = sequelize.define("book", {
	title: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	genre: {
		type: Sequelize.STRING
	},
	pages: {
		type: Sequelize.INTEGER
	}
},{

	timestamps: false
});


// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
// 5. Set timestamps to false on this model

// Sync model with DB
Book.sync();

// Export the book model for other files to use
module.exports = Book;