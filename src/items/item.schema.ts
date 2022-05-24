import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Author } from "src/authors/author.schema";

export type ItemDocument = Item & Document;

@Schema()
export class Item {
    @Prop()
    title: string

    @Prop()
    price: number

    @Prop()
    description: string

    @Prop({ type: Types.ObjectId, ref: 'Author' })
    author: Author
}

export const ItemSchema = SchemaFactory.createForClass(Item)