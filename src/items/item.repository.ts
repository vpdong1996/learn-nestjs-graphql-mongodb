import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IBaseRepository } from "src/base/Ibase.repository";
import { ItemInput } from "./input-items.input";
import { Item, ItemDocument } from "./item.schema";
import { ItemModel } from "./model/item.model";

@Injectable()
export class ItemRepository implements IBaseRepository<ItemModel, ItemInput> {
    constructor(@InjectModel(Item.name) private authorModel: Model<ItemDocument>) { }

    async create(createItemDto: ItemInput): Promise<ItemModel> {
        const createdItem = new this.authorModel(createItemDto)
        return await createdItem.save()
    }

    async findAll(): Promise<ItemModel[]> {
        return await this.authorModel.find()
    }

    async findOne(id: string): Promise<ItemModel> {
        return await this.authorModel.findById(id)
    }

    async update(id: string, item: ItemModel): Promise<ItemModel> {
        return await this.authorModel.findByIdAndUpdate(id, item, { new: true });
    }

    async delete(id: string): Promise<ItemModel> {
        return await this.authorModel.findByIdAndRemove(id)
    }
}