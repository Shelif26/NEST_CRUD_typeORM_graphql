/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from 'src/entity/organization.entity';
import { organizationType, updateOrganizationType } from 'src/dto/organization';

@Injectable()
export class organizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly orgRepository: Repository<Organization>,
  ) {}

  async getOrganization(): Promise<Organization[]> {
    return await this.orgRepository.find();
  }

  async getOrganizationByName(id: number): Promise<Organization> {
    const organization = await this.orgRepository.findOne({
      where: { id: id },
    });
    console.log(organization);
    return organization;
  }

  async createOrganization(input: organizationType): Promise<Organization> {
    const createUser = await this.orgRepository.save(input);
    return createUser;
  }

  async updateOrganization(
    input: updateOrganizationType,
  ): Promise<Organization> {
    const existingRecord = await this.orgRepository.findOne({
      where: { organizationName: input.organizationName },
    });
    existingRecord.industry = input.industry ?? existingRecord.industry;
    existingRecord.organizationSize =
      input.organizationSize ?? existingRecord.organizationSize;

    const updatedRecord = await this.orgRepository.save(existingRecord);
    return updatedRecord;
  }

  async deleteOrganization(id: number): Promise<string> {
    const organization = await this.orgRepository.findOne({
      where: { id: id },
    });

    if (!organization) {
      return `Organization with id:${id} not found`;
    }

    await this.orgRepository.delete(organization);

    return `Organization with id : ${id} has been successfully deleted`;
  }
}
