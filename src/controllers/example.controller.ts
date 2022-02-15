import { Request, Response } from 'express';
import Example from '../models/Example';
import { Paginate } from '../core/util/Paginate';

export class ExampleController {
    constructor() { }

    async getExamples(req: Request, res: Response) {
        const query = {
            // example: { $regex: req.query.search || '' }
            // OR
            $or: [
                { example: { $regex: req.query.search || '' } },
            ]
        }
        const paginate = new Paginate(req);
        paginate.setSelect('example');
        // paginate.setPopulate('child');
        paginate.setSort({ example: 1 });
        try {
            const examples = await Example.paginate(query, paginate.getOptions())
            res.status(200).json(examples);
        } catch (err) {
            res.json({ code: 500, msg: err });
        }
    }

    async getExampleById(req: Request, res: Response) {
        try {
            const example = await Example.findById(req.params.id);
            res.status(200).json(example);
        } catch (err) {
            res.json({ code: 500, msg: err });
        }
    }

    async createExample(req: Request, res: Response) {
        const { example } = req.body;
        const newPost = new Example({ example });
        await newPost.save();
        res.json({ code: 200, msg: 'ok' });
        // try {
        //     await newPost.save()
        // } catch (err) {
        //     res.json({ code: 500, msg: err });
        // }
    }

    async updateExample(req: Request, res: Response) {
        const { example } = req.body;
        try {
            await Example.findOneAndUpdate(
                { _id: req.params.id }, // filter
                { example }, // object updated
                { new: true } // get data updated
            )
            res.status(200).json({ code: 200, msg: 'Updated Successfully' });
        } catch (err) {
            res.json({ code: 500, msg: err });
        }
    }

    async deleteExample(req: Request, res: Response) {
        await Example.findOneAndDelete({ _id: req.params.id }, req.body)
        try {
            res.status(200).json({ code: 200, msg: 'Deleted Successfully' });
        } catch (err) {
            res.json({ code: 500, msg: err });
        }
    }

}