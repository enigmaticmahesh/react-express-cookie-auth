const mysql = require('mysql2/promise')

class DBHandler {
    constructor() {
        this.connection = null
    }

    async connectDB() {
        try {
            // Create the connection to database
            const connection = await mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'password',
                database : 'dbName'
            });
            console.log('Database Connection Succesfull')
            this.connection = connection
            return {err: null, connection}
        } catch (error) {
            console.log('Database Connection Failed')
            console.log({error})
            return {err: error, connection: null}
        }
    }
}

module.exports = new DBHandler()