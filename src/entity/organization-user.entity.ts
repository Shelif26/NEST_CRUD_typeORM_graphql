import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Organization } from './organization.entity';

@Entity()
export class OrganizationUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { name: 'first_name', length: 100 })
  firstName!: string;

  @Column('varchar', { name: 'last_name', length: 100 })
  lastName!: string;

  @Column('varchar', { name: 'email', length: 100 })
  email!: string;

  @Column('varchar', { name: 'phone_number', length: 100 })
  phonenumber?: string;

  @ManyToOne((type) => Organization, (organization) => organization.id)
  organization: Organization;
}
