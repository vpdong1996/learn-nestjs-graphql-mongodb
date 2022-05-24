import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IBaseRepository } from "src/base/Ibase.repository";
import { AuthorUpdateInput } from "./author-update.input";
import { AuthorInput } from "./author.input";
import { Author, AuthorDocument } from "./author.schema";
import { AuthorModel } from "./model/author.model";

@Injectable()
export class AuthorRepository implements IBaseRepository<AuthorModel, AuthorInput> {
    constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) { }

    async create(createItemDto: AuthorInput): Promise<AuthorModel> {
        const createdItem = new this.authorModel(createItemDto)
        return await createdItem.save()
    }

    async findAll(): Promise<AuthorModel[]> {
        return await this.authorModel.find().populate('items')
    }

    async findOne(id: string): Promise<AuthorModel> {
        return await this.authorModel.findById(id).populate('items')
    }

    async update(id: string, item: AuthorUpdateInput): Promise<AuthorModel> {
        return await this.authorModel.findByIdAndUpdate(id, item, { new: true });
    }

    async delete(id: string): Promise<AuthorModel> {
        return await this.authorModel.findByIdAndRemove(id)
    }
}