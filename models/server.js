const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor () {
        this.app = express();
        this.path = '/api';
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.routes();
        this.connectDB();
    }
    middlewares () {
        this.app.use(express.json());
        this.app.use(cors());
    }
    routes () {
        this.app.use(this.path, require('../routes/appointment'))
    };
    async connectDB (){
        await dbConnection();
    }
    listen () {
        this.app.listen(this.port, () => {
            console.log(`Servidor encendido en el puerto: ${this.port}`);
        });
    };
    stop() {
        this.app.close();
    };
    
};



module.exports = Server;