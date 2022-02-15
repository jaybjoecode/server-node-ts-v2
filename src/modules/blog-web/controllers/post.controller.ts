import {Request, Response} from 'express';
import Post from '../models/Post';

export class PostController {
    constructor(){}

    async getPosts(req: Request, res: Response) {
        const posts = await Post.paginate();
        
        res.status(200).json(posts);
    }

    async createPost(req: Request, res: Response) {
        const { title, url, content, image } = req.body;
        const newPost = new Post({ title, url, content, image });
        await newPost.save();

        res.status(201).json({code: 200, msg: 'Created Successfully'});
    }

    async getPostById(req: Request, res: Response) {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post);
    }

    async updatePost(req: Request, res: Response){
        const { title, url, content, image } = req.body;
        const post = await Post.findOneAndUpdate(
            {_id: req.params.id},
            { title, url, content, image },
            {new: true}
        );

        res.status(200).json({code: 200, msg: 'Updated Successfully'});
    }

    async deletePost(req: Request, res: Response){
        await Post.findOneAndDelete({_id: req.params.id}, req.body);

        res.status(200).json({code: 200, msg: 'Deleted Successfully'});
    }

}