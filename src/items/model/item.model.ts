import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
import { AuthorModel } from "src/authors/model/author.model";

@ObjectType()
export class ItemModel {
    @Field(() => ID)
    @IsString()
    readonly id?: string

    @Field()
    @IsString()
    @Length(5, 20)
    @IsNotEmpty()
    readonly title?: string

    @Field(() => Int)
    @IsNumber()
    readonly price?: number

    @Field()
    @IsString()
    readonly description?: string

    @Field(type => AuthorModel)
    readonly author?: AuthorModel

}