import 'reflect-metadata' // required by TypeORM
import express from 'express';
import morgan from 'morgan';
import path from 'node:path';

import routes from './routes/';
import initializeDb from './database/initializeDb';

const app = express();

const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            write: (message: string) => console.log(message.trim()),
        },
    }
);

app.use(morganMiddleware);
app.use(express.json({ limit: '50mb', }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

const port = process.env.PORT || 8080;
const server = app.listen(port, async () => {
    await initializeDb();
    console.log(`Server started on PORT: ${port}`);
});