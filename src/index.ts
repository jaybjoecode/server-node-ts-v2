import express from 'express';
import startDataBaseConnection from './core/config/database';
import startAppConfiguration from './core/config/app';
import startRouting from './routing';

 class Server {
    public app: express.Application;

     constructor(){
        this.app = express();
        this.config();
        this.routes();
     }

     config(){
        //__DataBase Config
        startDataBaseConnection();
        //__App Settings
        startAppConfiguration(this.app);
     }

     routes(){
         //__Routing
         startRouting(this.app);
     }

     start(){
         //__Start Server
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${process.env.SERVER_URL}:${this.app.get('port')}`);
        });
     }

 }

 //__Start this server
 const server = new Server();
 server.start();