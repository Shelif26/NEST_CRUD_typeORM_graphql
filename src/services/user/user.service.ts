/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
