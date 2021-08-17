import express from 'express';
import cors from 'cors';
import { PostController } from './controller/posts.controller.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(express.json({ limit: '20mb' }));

app.get('/', (request, response) => {
    response.send('HELLO!');
});

// Endpunkte definieren
app.post("/plants", PostController.create); 
app.get("/plants", PostController.readAll); 
app.get("/plants/:id", PostController.readOne); 
app.put("/plants/:id", PostController.update); 
app.delete("/plants/:id", PostController.delete); 

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ...`);
    }
});
