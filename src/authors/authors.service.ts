import { Injectable } from '@nestjs/common';
import { AuthorUpdateInput } from './author-update.input';
import { AuthorInput } from './author.input';
import { AuthorRepository } from './author.repository';
import { AuthorModel } from './model/author.model';

@Injectable()
export class AuthorService {
    constructor(private readonly authorRepository: AuthorRepository) { }

    async create(createItemDto: AuthorInput): Promise<AuthorModel> {
        return await this.authorRepository.create(createItemDto)
    }

    async findAll(): Promise<AuthorModel[]> {
        return await this.authorRepository.findAll()
    }

    async findOne(id: string): Promise<AuthorModel> {
        return await this.authorRepository.findOne(id)
    }

    async delete(id: string): Promise<AuthorModel> {
        return await this.authorRepository.delete(id)
    }

    async update(id: string, item: AuthorUpdateInput): Promise<AuthorModel> {
        return await this.authorRepository.update(id, item)
    }
}   
