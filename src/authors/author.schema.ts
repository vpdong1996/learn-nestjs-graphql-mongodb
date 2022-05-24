import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Item } from "src/items/item.schema";

export type AuthorDocument = Author & Document;

@Schema()
export class Author {
    @Prop()
    email: string;

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Item' }] })
    items: Item[]
}

export const AuthorSchema = SchemaFactory.createForClass(Author)