import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { OrganizationUser } from "./organization-user.entity";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { name:'organization_name', length: 100, unique: true })
    organizationName!: string;

    @Column('varchar', { name:'industry', length: 100, unique: true })
    industry!: string

    @Column('varchar', { name:'organization_size', length: 100, unique: true })
    organizationSize?: string;

    @OneToMany(() => OrganizationUser, 
    organizationUser => organizationUser.id)
    organizationUser: OrganizationUser[];
}