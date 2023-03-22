/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { organizationUserType } from 'src/dto/organizationUser';
import { OrganizationUser } from 'src/entity/organization-user.entity';
import { organizationUserService } from 'src/services/user/user.service';

@Resolver('OrganizationUser')
export class OrganizationUserResolver {
  constructor(private readonly OrganizationUserService: organizationUserService) {}
  @Query()
  getOrganizationUsers(): Promise<OrganizationUser[]> {
    return this.OrganizationUserService.getOrganizationUsers();
  }

  @Mutation()
  createUser(@Args('input') input: organizationUserType): Promise<OrganizationUser> {
    console.log(input);
    return this.OrganizationUserService.createUser(input);
  }
}
