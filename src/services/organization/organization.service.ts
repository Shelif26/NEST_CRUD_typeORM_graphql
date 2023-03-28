/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from 'src/entity/organization.entity';
import { User } from 'src/entity/user.entity';
import { organizationType, updateOrganizationType } from 'src/dto/organization';
import { pick } from 'lodash';
import { userOrganization } from 'src/entity/user_organization.entity';

@Injectable()
export class organizationService {
  constructor(
    @InjectRepository(Organization)
    private orgRepository: Repository<Organization>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(userOrganization)
    private userOrganizationRepository: Repository<userOrganization>,
  ) {}

  async getOrganizations(): Promise<Organization[]> {
    return await this.orgRepository.find();
  }

  async getOrganizationById(id: number): Promise<Organization | string> {
    const organization = await this.orgRepository.findOne({
      where: { id: id },
    });

    if (!organization) {
      return `Organization : ${id} not found in the DB`;
    }

    return organization;
  }

  async createOrganization(input: organizationType): Promise<Organization | string> {
    const existingRecord = await this.userRepository.findOne({ where: { email: input.email } });

    if (!existingRecord) {
      return `user :${input.email} not found`;
    }

    const createUser = await this.orgRepository.save({
      ...pick(input, ['organizationName', 'industry', 'organizationSize', 'email']),
      user: existingRecord,
    });

    const createUserOrganization = await this.userOrganizationRepository.save({
      ...pick(input, ['organizationName', 'email']),
    });

    return createUser;
  }

  async updateOrganization(input: updateOrganizationType): Promise<Organization | string> {
    const existingRecord = await this.orgRepository.findOne({
      where: { organizationName: input.organizationName },
    });

    if (!existingRecord) {
      return `Organization : ${input.organizationName} not found in the DB`;
    }

    existingRecord.industry = input.industry ?? existingRecord.industry;
    existingRecord.organizationSize = input.organizationSize ?? existingRecord.organizationSize;

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

  async softDeleteOrganization(id: number): Promise<string> {
    const Soft_delete = await this.orgRepository.findOne({
      where: { id: id },
    });

    if (!Soft_delete) {
      return `Organization with id:${id} not found`;
    }

    await this.orgRepository.softDelete(Soft_delete);

    return `Organization with id:${id} is been softDeleted, you can restore it anytime`;
  }

  async restoreSoftDeletedOrganization(id: number): Promise<string> {
    const resotreOrg = await this.orgRepository.restore({ id: id });

    return `Organization with id:${id} is been restored`;
  }
}