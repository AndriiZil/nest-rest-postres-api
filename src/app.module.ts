import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './users/users.resolver';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'andrii',
      password: 'password',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
