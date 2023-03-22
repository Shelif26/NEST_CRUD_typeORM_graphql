/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserType } from 'src/dto/organizationUser';
import { User } from 'src/entity/user.entity';
import { userService } from 'src/services/user/user.service';

@Resolver('OrganizationUser')
export class OrganizationUserResolver {
  constructor(private readonly OrganizationUserService: userService) {}
  @Query()
  getOrganizationUsers(): Promise<User[]> {
    return this.OrganizationUserService.getOrganizationUsers();
  }

  @Mutation()
  createUser(@Args('input') input: UserType): Promise<User> {
    console.log(input);
    return this.OrganizationUserService.createUser(input);
  }
}
