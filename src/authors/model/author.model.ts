import { Field, ID, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsString } from "class-validator";
import { Item } from "src/items/item.schema";
import { ItemModel } from "src/items/model/item.model";

@ObjectType()
export class AuthorModel {
    @Field(() => ID)
    @IsString()
    readonly id?: string

    @Field()
    @IsEmail()
    @IsString()
    readonly email?: string

    @Field()
    @IsString()
    readonly name?: string

    @Field()
    @IsString()
    readonly age?: number

    @Field(type => [ItemModel], { nullable: 'items' })
    readonly items?: ItemModel[];
}