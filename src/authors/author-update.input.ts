import { InputType, PartialType } from "@nestjs/graphql";
import { AuthorInput } from "./author.input";

@InputType()
export class AuthorUpdateInput extends PartialType(AuthorInput) { }