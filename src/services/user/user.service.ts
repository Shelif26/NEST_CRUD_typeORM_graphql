/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { organizationUserType } from 'src/dto/organizationUser';
import { OrganizationUser } from 'src/entity/organization-user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class organizationUserService {
  constructor(
    @InjectRepository(OrganizationUser)
    private readonly orgUserRepository: Repository<OrganizationUser>,
  ) {}
  async getOrganizationUsers(): Promise<OrganizationUser[]> {
    return await this.orgUserRepository.find();
  }

  async createUser(input: organizationUserType): Promise<OrganizationUser>{
    console.log(input);
    const createdUsers = await this.orgUserRepository.save(input);
    console.log(createdUsers);
    return createdUsers
  }
}