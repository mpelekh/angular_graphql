import express from 'express';
import bodyParser from 'body-parser';
import initializeRoutes from './routes';

const app  = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../../dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

initializeRoutes(app);

app.listen(port);