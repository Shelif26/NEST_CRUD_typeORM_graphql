/* eslint-disable prettier/prettier */
import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { organizationType, updateOrganizationType } from 'src/dto/organization';
import { Organization } from 'src/entity/organization.entity';
import { organizationService } from '../services/organization/organization.user.service';

@Resolver('Organization')
export class OrganizationResolver {
  constructor(private readonly OrganizationService: organizationService) {}
  @Query()
  getOrganizations(): Promise<Organization[]> {
    return this.OrganizationService.getOrganization();
  }

  @Query()
  getOrganizationByName(@Args('id') id: number): Promise<Organization> {
    return this.OrganizationService.getOrganizationByName(id);
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
}
