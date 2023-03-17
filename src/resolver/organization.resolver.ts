import { Args, Query,  Mutation, Resolver } from "@nestjs/graphql";
import { Organization } from "src/entity/organization.entity";
import { organizationType } from "../dto/organization";
import { organizationService } from "../services/organization/organization.user.service";


@Resolver('Organization')
export class OrganizationResolver {
    constructor(private readonly OrganizationService: organizationService) {}
    @Query()
    getOrganizations(): Promise<Organization[]> {
        return this.OrganizationService.getOrganization();
    }

    @Mutation()
    createOrganization(@Args('input') input: Organization) {
        console.log(input);
        return this.OrganizationService.createOrg(input);
    }
}