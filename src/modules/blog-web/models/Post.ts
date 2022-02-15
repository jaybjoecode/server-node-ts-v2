import {Schema, Document, model} from 'mongoose';
const extendSchema = require('mongoose-extend-schema');
import mongoosePaginate from 'mongoose-paginate';

const PostSchema = new Schema(
    {
        title: {type: String, required: true},
        url: {type: String, required: true, lowercase: true},
        content: {type: String, required: true},
        image: String
    },
    {
        timestamps: true
    }
);

export interface IPost extends Document {
    title: string,
    url: string,
    content: string,
    image: string
}

// mongoose-paginate-v2
PostSchema.plugin(mongoosePaginate);
export default model<IPost>('Post', PostSchema);