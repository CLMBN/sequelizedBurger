// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function for SQL syntax.
function selectAll(table, callback) {
    var query = 'SELECT * FROM ' + table;
    connection.query(query, function(error, data) {
        if (error) throw error;
        callback(date);
    });
}

function selectBurger(table, column, value, callback) {
    var query = 'SELECT * FROM ' + table + ' WHERE ' + column + ' = ' + value;
    connection.query(query, function(error, data) {
        if (error) throw error;
        callback(data);
    });
}

function selectOne(table, id, callback) {
    var query = 'SELECT * FROM ' + table + ' WHERE id = ?';
    connection.query(query, [id], function(error, data) {
        if (error) throw error;
        callback(data);
    });
}

function insertOne(table, columns, values, callback) {
    var query = 'INSERT INTO ' + table + ' (' + columns + ') VALUES (?)';
    connection.query(query, [values], function(error, data) {
        if (error) throw error;
        callback();
    });
}

function updateOne(table, column, value, id, callback) {
    var query = 'UPDATE ' + table + ' SET ' + column + ' = ? WHERE id = ?';
    connection.query(query, [value, id], function(error, data) {
        if (error) throw error;
        callback();
    });
}


// Export the orm object for the model
module.exports = {
    selectAll    : selectAll,
    selectBurger : selectBurger,
    selectOne    : selectOne,
    insertOne    : insertOne,
    updateOne    : updateOne
}