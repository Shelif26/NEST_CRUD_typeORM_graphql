/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '../entity/organization.entity';
import { OrganizationUser } from '../entity/organization-user.entity';
import {} from '../resolver/organization.resolver';
import { join } from 'path';
import { organizationService } from '../services/organization/organization.user.service';
import { OrganizationResolver } from '../resolver/organization.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forFeature([Organization, OrganizationUser]),
  ],
  controllers: [],
  providers: [OrganizationResolver, organizationService],
})
export class OrganizationModule {}
