/* eslint-disable prettier/prettier */
import { Query, Resolver } from "@nestjs/graphql";
import { OrganizationUser } from "src/entity/organization-user.entity";
import { organizationUserService } from "src/services/user/user.service";

@Resolver('OrganizationUser')
export class OrganizationUserResolver {
  constructor(private readonly OrganizationUserService: organizationUserService) {}
  @Query()
  getOrganizationUsers():Promise<OrganizationUser[]>{
    return this.OrganizationUserService.getOrganizationUsers()
  }
}