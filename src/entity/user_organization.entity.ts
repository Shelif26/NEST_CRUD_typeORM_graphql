/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Organization } from './organization.entity';
import { User } from './user.entity';

@Entity()
export class userOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Organization, (organization) => organization.organizationName, { onDelete: 'CASCADE',nullable: false,eager:true})
  @JoinColumn({ name: 'organization_name', referencedColumnName: 'organizationName' })
  organizationName: Organization;

  @ManyToOne(() => User, (User) => User.email, { onDelete: 'CASCADE',nullable: false,eager:true})
  @JoinColumn({ name: 'user_email', referencedColumnName: 'email' })
  email: User;

  @CreateDateColumn({ name: 'created_timestamp', nullable: false })
  createdTimestamp?: Date;

  @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
  updatedTimestamp?: Date;

  @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
  deletedTimestamp?: Date;
}
