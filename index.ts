import { SERVER_PORT } from './global/enviroment';
import Server from "./classes/server";
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';0

const server = Server.instance;

//Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin: true, credentials: true}));

//Rutas de servicios
server.app.use('/', router);

server.start(() =>{
    console.log(`Servidor corriendo en el puerto ${SERVER_PORT}`);
});