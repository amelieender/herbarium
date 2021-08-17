import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    response.send('HELLO!');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ...`);
    }
});
