import { InputType, Field, Int, ID } from '@nestjs/graphql';
import { Length } from 'class-validator';
import { Author } from 'src/authors/author.schema';
import { AuthorModel } from 'src/authors/model/author.model';

@InputType()
export class ItemInput {
  @Field()
  @Length(5, 20)
  readonly title: string;

  @Field(() => Int)
  readonly price: number;

  @Field()
  readonly description: string;

  @Field(() => ID)
  readonly authorId: string;
}