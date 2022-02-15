import {Schema, Document, model} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import {IPost} from './Post';

const BlogSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        post: {type: Schema.Types.ObjectId, ref: 'Post'}
    },
    {
        timestamps: true,
    }
);

export interface IBlog extends Document {
    name: string,
    description: string,
    post: IPost
}

// mongoose-paginate-v2
BlogSchema.plugin(mongoosePaginate);
export default model<IBlog>('Blog', BlogSchema);