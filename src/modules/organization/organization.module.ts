/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '../../entity/organization.entity';
import {} from '../../resolver/organization.resolver';
import { join } from 'path';
import { organizationService } from '../../services/organization/organization.service';
import { OrganizationResolver } from '../../resolver/organization.resolver';
import { User } from 'src/entity/user.entity';
import { userOrganization } from 'src/entity/user_organization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, User, userOrganization]),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [],
  providers: [OrganizationResolver, organizationService],
})
export class OrganizationModule {}
