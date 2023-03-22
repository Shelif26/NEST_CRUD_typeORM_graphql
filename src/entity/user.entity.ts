/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'first_name', length: 100, unique: true, primary: true })
  firstName!: string;

  @Column('varchar', { name: 'last_name', length: 100 })
  lastName!: string;

  @Column('varchar', { name: 'email', length: 100, unique: true })
  email!: string;

  @Column('varchar', { name: 'phone_number', length: 100 })
  phonenumber?: string;

  @CreateDateColumn({ name: 'created_timestamp', nullable: false })
  createdTimestamp?: Date;

  @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
  updatedTimestamp?: Date;

  @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
  deletedTimestamp?: Date;
}
