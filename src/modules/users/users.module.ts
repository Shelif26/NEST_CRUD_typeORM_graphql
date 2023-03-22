/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationUser } from '../../entity/organization-user.entity';
import {} from '../../resolver/organization.resolver';
import { join } from 'path';
import { organizationUserService } from 'src/services/user/user.service';
import { OrganizationUserResolver } from 'src/resolver/user.resolver';

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
    TypeOrmModule.forFeature([OrganizationUser]),
  ],
  controllers: [],
  providers: [OrganizationUserResolver, organizationUserService],
})
export class userModule {}