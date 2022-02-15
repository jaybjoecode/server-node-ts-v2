import {Request, Response, Router} from 'express';
import {BlogController}  from '../controllers/blog.controller';

class BlogRouter {
    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        const blogController = new BlogController;
        this.router.get('/', blogController.getBlogs);
        this.router.get('/:id', blogController.getBlogById);
        this.router.post('/', blogController.createBlog);
        this.router.put('/:id', blogController.updateBlog);
        this.router.delete('/:id', blogController.deleteBlog);
    }

}

const blogRouter = new BlogRouter();
export default blogRouter.router;