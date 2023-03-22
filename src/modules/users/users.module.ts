/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import {} from '../../resolver/organization.resolver';
import { join } from 'path';
import { userService } from 'src/services/user/user.service';
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
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [],
  providers: [OrganizationUserResolver, userService],
})
export class userModule {}