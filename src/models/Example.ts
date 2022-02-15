import { Schema, model, Document } from 'mongoose';
const extendSchema = require('mongoose-extend-schema');
import mongoosePaginate from 'mongoose-paginate';
// const mongoosePaginate = require('mongoose-paginate-v2');
import {BaseSchema, IBaseSchema}  from '../core/models/BaseSchema';

// const BlogSchema = new Schema( // create model
const ExampleSchema = extendSchema(BaseSchema, // extend from model BaseSchema
  {
    example: {type: String, required: true},
  },
  {
    timestamps: true // add createdAt and updatedAt and set date itself
  }
);
// simple export
// export default model<IExample>('Example', Example);

export interface IExample extends Document {
    example: string;
}

// mongoose-paginate-v2
ExampleSchema.plugin(mongoosePaginate);
// interface Example<T extends Document> extends PaginateModel<T> {}
// export with paginate
// export default model<IExample>('Example', ExampleSchema) as Example<IExample>;
export default model<IExample>('Example', ExampleSchema);