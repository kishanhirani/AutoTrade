const express = require('express')
const rootRouter = require('./routes/index');

const app = express()
app.use(express.json());

app.use('/api', rootRouter);

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
