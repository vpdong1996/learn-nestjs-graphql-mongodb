import { Injectable } from '@nestjs/common';
import { ItemInput } from './input-items.input';
import { ItemRepository } from './item.repository';
import { ItemModel } from './model/item.model';

@Injectable()
export class ItemsService {
    constructor(private readonly itemRepository: ItemRepository) { }

    async create(createItemDto: ItemInput): Promise<ItemModel> {
        return this.itemRepository.create(createItemDto)
    }

    async findAll(): Promise<ItemModel[]> {
        return await this.itemRepository.findAll()
    }

    async findOne(id: string): Promise<ItemModel> {
        return await this.itemRepository.findOne(id)
    }

    async delete(id: string): Promise<ItemModel> {
        return await this.itemRepository.delete(id)
    }

    async update(id: string, item: ItemModel): Promise<ItemModel> {
        return await this.itemRepository.update(id, item)
    }
}
