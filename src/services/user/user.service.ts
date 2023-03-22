/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/dto/organizationUser';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(User)
    private readonly orgUserRepository: Repository<User>,
  ) {}
  async getOrganizationUsers(): Promise<User[]> {
    return await this.orgUserRepository.find();
  }

  async createUser(input: UserType): Promise<User>{
    console.log(input);
    const createdUsers = await this.orgUserRepository.save(input);
    console.log(createdUsers);
    return createdUsers
  }
}