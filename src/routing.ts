import express, { Application } from 'express';
import path from 'path';
import blogRouter from './modules/blog-web/routers/blog.router';
import postRouter from './modules/blog-web/routers/post.router';
import PhotoRouter from './routes/photo.router';
import exampleRouter from './routes/example.router';

export default async function startRouting(app: Application) {

////////////////////////////////////////////////////////////////////////////////
// START-ROUTERS
////////////////////////////////////////////////////////////////////////////////
    // Example
    app.use(`${process.env.PATH_API_V1}/example`, exampleRouter);

    // Blog-Web
    app.use(`${process.env.PATH_API_V1}/blog`, blogRouter);
    app.use(`${process.env.PATH_API_V1}/post`, postRouter);

    // Photo
    app.use(`${process.env.PATH_API_V1}/photo`, PhotoRouter);

////////////////////////////////////////////////////////////////////////////////
// END-ROUTERS
////////////////////////////////////////////////////////////////////////////////

    // this folders for this application will be used to store public file images
    app.use('/uploads', express.static(path.resolve('uploads')));

    // Static Files
    app.use(express.static(path.join(__dirname, 'public')));
    // Index
    app.get('/', (req,res) => res.sendFile(path.join(__dirname+'/public/pages/index.html')));
    app.get('/*', (req,res) => res.sendFile(path.join(__dirname+'/public/pages/404.html')));

}