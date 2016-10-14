import entry from './entry';
import api from './api';

export default function (app) {
    app.use('/', entry);
    app.use('/api', api);
}

