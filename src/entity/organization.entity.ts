/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'organization_name', length: 100, unique: true})
  organizationName!: string;

  @Column('varchar', { name: 'industry', length: 100 })
  industry!: string;

  @Column('varchar', { name: 'organization_size', length: 100 })
  organizationSize?: string;

  @ManyToOne(() => User,(User) => User.email, { onDelete: 'RESTRICT', nullable: true, eager: true })
  @JoinColumn({ name: 'user_email', referencedColumnName: 'email' })
  email: User;

  @CreateDateColumn({ name: 'created_timestamp', nullable: false })
  createdTimestamp?: Date;

  @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
  updatedTimestamp?: Date;

  @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
  deletedTimestamp?: Date;
}
