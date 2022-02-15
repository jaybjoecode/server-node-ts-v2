import {Request, Response, Router} from 'express';
import {PostController}  from '../controllers/post.controller';

class PostRouter {
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        const postController = new PostController;
        this.router.get('/', postController.getPosts);
        this.router.get('/:id', postController.getPostById);
        this.router.post('/', postController.createPost);
        this.router.put('/:id', postController.updatePost);
        this.router.delete('/:id', postController.deletePost);
    }

}

const postRouter = new PostRouter();
export default postRouter.router;