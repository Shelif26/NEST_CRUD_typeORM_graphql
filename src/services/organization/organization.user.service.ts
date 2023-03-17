import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from 'src/entity/organization.entity';

@Injectable()
export class organizationService {
    constructor(
        @InjectRepository(Organization)
        private readonly orgRepository: Repository<Organization>,
    ) {}

    async getOrganization(): Promise<Organization[]> {
        return await this.orgRepository.find();
    }

    // async findOne(id: number): Promise<Organization> {
    //     return await this.orgRepository.findOne(id);
    // }

    async createOrg(input: Organization): Promise<Organization> {
        console.log(input);
        const createUser = await this.orgRepository.save(input)
        console.log(createUser);
        return createUser ;
    }

    // async update(id: number, organization: Organization): Promise<Organization> {
    //     const existingRecord = await this.orgRepository.findOne(id);
    //     const updatedRecord = pick  existingRecord.organizationName = Organization.name;
    //     return await this.orgRepository.save(updatedRecord);
    // }

    // async delete(id: number): Promise<void> {
    //     await this.orgRepository.delete(id);
    //}
}
