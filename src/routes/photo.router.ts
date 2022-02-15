import { Router } from 'express';
const PhotoRouter = Router();
import upload from '../core/libs/multer';
import { getPhotos, createPhoto, deletePhoto, getPhoto, updatePhoto } from '../controllers/photo.controller';

// middleware
//PhotoRouter.use(upload.single('image'));

// routes
PhotoRouter.get('/', getPhotos);
PhotoRouter.get('/:id', getPhoto);
PhotoRouter.post('/', upload.single('image'), createPhoto);
PhotoRouter.put('/:id', updatePhoto);
PhotoRouter.delete('/:id', deletePhoto);

export default PhotoRouter;