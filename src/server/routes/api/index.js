import schema from './schema';
import { graphql } from 'graphql';
import express from 'express';

const router = express.Router();

router.post('/graphql', (req, res) => {
    const {query, vars} = req.body;

    graphql(schema, query, null, vars)
        .then(result => {
            res.send(result);
        });
});

export default router;
