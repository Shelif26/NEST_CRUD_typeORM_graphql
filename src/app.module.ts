/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationUser } from './entity/organization-user.entity';
import { Organization } from './entity/organization.entity';
import { OrganizationModule } from './organization/organization.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
