import express, { Application } from 'express';

const app: Application = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Pong");
    return;
})


app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
})
