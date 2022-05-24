import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuthorModule } from './authors/author.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-graphql'),
    AuthorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
