require('dotenv').config();
import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

export default async function startAppConfiguration(app: Application) {
    app.set('port', process.env.SERVER_PORT || 3000);
    //__Middlewares
    app.use(morgan('dev'));
    app.use(cors({
        origin: process.env.WEB_URL || 'http://localhost:4200',
    }));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(helmet());
    app.use(compression());
}