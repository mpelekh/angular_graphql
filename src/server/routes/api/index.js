import Schema from './schema';
import { graphql } from 'graphql';
import express from 'express';

const router = express.Router();

router.get('/graphql', (req, res) => {
    const {query, vars} = req.body;

    graphql(Schema, query, null, vars)
        .then(result => {
            res.send(result);
        });
});

export default router;
