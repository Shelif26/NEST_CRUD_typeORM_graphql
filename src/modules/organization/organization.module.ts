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
import { OrganizationUser } from 'src/entity/organization-user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, OrganizationUser]),
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
