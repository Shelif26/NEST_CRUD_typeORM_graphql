/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationUser } from './entity/organization-user.entity';
import { Organization } from './entity/organization.entity';
import { OrganizationModule } from './modules/organization/organization.module';
import { userModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '164116',
      database: 'postgres',
      synchronize: false,
      logging: true,
      entities: [OrganizationUser, Organization],
    }),
    OrganizationModule,
    userModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
