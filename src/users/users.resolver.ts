import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Resolver(_ => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(_ => [User])
  async getUserById(@Args('id') id: string) {
    const user = await this.usersService.getUserById(id);

    return user;
  }
}
