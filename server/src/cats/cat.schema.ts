import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
});
