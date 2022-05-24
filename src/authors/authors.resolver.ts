import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorUpdateInput } from './author-update.input';
import { AuthorInput } from './author.input';
import { AuthorService } from './authors.service';
import { AuthorModel } from './model/author.model';

@Resolver(of => AuthorModel)
export class AuthorResolver {
    constructor(private readonly authorService: AuthorService) { }

    @Query(returns => [AuthorModel])
    async authors(): Promise<AuthorModel[]> {
        return this.authorService.findAll()
    }

    @Query(returns => AuthorModel)
    async author(@Args('id') id: string) {
        return this.authorService.findOne(id)
    }

    @Mutation(returns => AuthorModel)
    async createAuthor(@Args('input') input: AuthorInput): Promise<AuthorModel> {
        return this.authorService.create(input)
    }

    @Mutation(returns => AuthorModel)
    async updateAuthor(@Args('id') id: string, @Args('input') input: AuthorUpdateInput): Promise<AuthorModel> {
        return this.authorService.update(id, input)
    }

    @Mutation(returns => AuthorModel)
    async deleteAuthor(@Args('id') id: string) {
        return this.authorService.delete(id);
    }
}
