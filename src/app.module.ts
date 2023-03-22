/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationUser } from './entity/organization-user.entity';
import { Organization } from './entity/organization.entity';
import { OrganizationModule } from './modules/organization/organization.module';
import { userModule } from './modules/users/users.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      synchronize: true,
      logging: true,
      entities: [OrganizationUser, Organization],
    }),
    OrganizationModule,
    userModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
