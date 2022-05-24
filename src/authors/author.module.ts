import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorRepository } from './author.repository';
import { AuthorResolver } from './authors.resolver';
import { Author, AuthorSchema } from './author.schema';
import { AuthorService } from './authors.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }])],
  providers: [AuthorResolver, AuthorService, AuthorRepository]
})
export class AuthorModule { }
