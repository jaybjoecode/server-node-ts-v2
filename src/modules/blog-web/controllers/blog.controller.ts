import {Request, Response} from 'express';
import Blog from '../models/Blog';
import {Paginate} from '../../../core/util/Paginate';

export class BlogController {
    constructor(){}

    async getBlogs(req: Request, res: Response) {
        const query = {
            $or: [
                { name: {$regex: req.query.search || ''} },
                { description: {$regex: req.query.search || ''} },
            ]
        }

        const paginate = new Paginate(req);
        paginate.setSort({name: 1});

        const blogs = await Blog.paginate(query, paginate.getOptions());

        res.status(200).json(blogs);
    }

    async createBlog(req: Request, res: Response) {
        const { name, description, post } = req.body;
        const newBlog = new Blog({ name, description, post });
        await newBlog.save();

        res.status(201).json({code: 200, msg: 'Created Successfully'});
    }

    async getBlogById(req: Request, res: Response) {
        const blog = await Blog.findById(req.params.id).populate('post');

        res.status(200).json(blog);
    }

    async updateBlog(req: Request, res: Response){
        const { title, url, content, image } = req.body;
        const blog = await Blog.findOneAndUpdate(
            {_id: req.params.id},
            { title, url, content, image },
            {new: true});

        res.status(200).json({code: 200, msg: 'Updated Successfully'});
    }

    async deleteBlog(req: Request, res: Response){
        await Blog.findOneAndDelete({_id: req.params.id}, req.body);

        res.status(200).json({code: 200, msg: 'Deleted Successfully'});
    }

}
