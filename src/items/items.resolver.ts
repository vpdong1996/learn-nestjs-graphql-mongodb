import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemInput } from './input-items.input';
import { ItemsService } from './items.service';
import { ItemModel } from './model/item.model';

@Resolver(of => ItemModel)
export class ItemsResolver {
    constructor(private readonly itemsService: ItemsService) { }

    @Query(returns => [ItemModel])
    async items(): Promise<ItemModel[]> {
        return this.itemsService.findAll()
    }

    @Mutation(returns => ItemModel)
    async createItem(@Args('input') input: ItemInput): Promise<ItemModel> {
        return this.itemsService.create(input)
    }

    @Mutation(returns => ItemModel)
    async updateItem(@Args('id') id: string, @Args('input') input: ItemInput): Promise<ItemModel> {
        return this.itemsService.update(id, input)
    }

    @Mutation(returns => ItemModel)
    async deleteItem(@Args('id') id: string) {
        return this.itemsService.delete(id);
    }
}
