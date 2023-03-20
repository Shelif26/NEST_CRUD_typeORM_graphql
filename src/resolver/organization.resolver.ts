/* eslint-disable prettier/prettier */
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { organizationType, updateOrganizationType } from 'src/dto/organization';
import { Organization } from 'src/entity/organization.entity';
import { organizationService } from '../services/organization/organization.service';

@Resolver('Organization')
export class OrganizationResolver {
  constructor(private readonly OrganizationService: organizationService) {}
  @Query()
  getOrganizations(): Promise<Organization[]> {
    return this.OrganizationService.getOrganization();
  }

  @Query()
  getOrganizationById(@Args('id') id: number): Promise<Organization | string> {
    return this.OrganizationService.getOrganizationById(id);
  }

  @Mutation()
  createOrganization(@Args('input') input: organizationType) {
    return this.OrganizationService.createOrganization(input);
  }

  @Mutation()
  updateOrganization(@Args('input') input: updateOrganizationType) {
    return this.OrganizationService.updateOrganization(input);
  }

  @Mutation()
  deleteOrganization(@Args('id') id: number): Promise<string> {
    return this.OrganizationService.deleteOrganization(id);
  }

  @Mutation()
  softDeleteOrganization(@Args('id') id: number):Promise<string>{
    return this.OrganizationService.softDeleteOrganization(id)
  }

  @Mutation()
  restoreSoftdeletedOrg(@Args('id') id: number):Promise<string>{
    return this.OrganizationService.softDeleteOrganization(id)
  }

}
