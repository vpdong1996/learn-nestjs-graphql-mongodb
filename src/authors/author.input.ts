import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, Length } from "class-validator";

@InputType()
export class AuthorInput {
    @Field()
    @IsEmail()
    readonly email: string;

    @Field()
    @Length(5, 20)
    readonly username: string;

    @Field(() => Int)
    readonly age: number;

    @Field()
    readonly name: string;

    @Field(() => [String], { defaultValue: [] })
    readonly items?: string[]
}