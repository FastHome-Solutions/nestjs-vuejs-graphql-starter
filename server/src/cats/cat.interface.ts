import { Document } from 'mongoose';

export interface CatInterface extends Document {
    readonly id: number;
    readonly name: string;
    readonly age: number;
}
