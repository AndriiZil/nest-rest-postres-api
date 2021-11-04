import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public async getUserById(id: string) {
    return {
      id: 10,
      name: 'Bob',
      age: 30,
    };
  }
}
