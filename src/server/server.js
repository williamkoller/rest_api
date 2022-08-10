const express = require('express');
const router = require('./route/postsRoute');
const app = express();

app.use(express.json());
app.use(router);

app.listen(3000);
