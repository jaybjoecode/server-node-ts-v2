import { Schema, Document } from 'mongoose';

export const BaseSchema = new Schema(
    {
        // attribute: {type: Date, default: Date.now}
    }
);

export interface IBaseSchema extends Document {
    // attribute: type
}