import express from 'express';
import mongoose from 'mongoose';
import { Routes } from './@Infra/http/routes/routes';
import { databaseConfig } from './config/db.config';
import { config } from 'dotenv'

const app = express();

config();

app.listen(3667, () => {
    console.log('HTTP Server running!');
});

app.use(express.json())
app.use(Routes)

mongoose.set("strictQuery", false);
mongoose
    .connect(databaseConfig.mongoUrl)
    .then(() => {
        app.listen(3002);
        console.log("Conectado ao banco!")
    })
    .catch((err) => {
        console.log("Erro: ", err)
    });