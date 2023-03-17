/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from 'src/entity/organization.entity';
import { organizationType } from 'src/dto/organization';

@Injectable()
export class organizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly orgRepository: Repository<Organization>,
  ) {}

  async getOrganization(): Promise<Organization[]> {
    return await this.orgRepository.find();
  }

  async createOrg(input: organizationType): Promise<Organization> {
    console.log(input);
    const createUser = await this.orgRepository.save(input);
    console.log(createUser);
    return createUser;
  }
}
