
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum OrganizationSize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}

export enum Industry {
    HEALTHCARE = "HEALTHCARE",
    AGRICULTURE = "AGRICULTURE",
    AUTOMOBILE = "AUTOMOBILE",
    BANKING = "BANKING",
    CONSTRUCTION = "CONSTRUCTION",
    EDUCATION = "EDUCATION"
}

export interface OrganizationInput {
    organizationName?: Nullable<string>;
    industry?: Nullable<Industry>;
    organizationSize?: Nullable<OrganizationSize>;
    mpi?: Nullable<number>;
}

export interface OrganizationUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phonenumber?: Nullable<string>;
}

export interface UpdateOrganizationInput {
    organizationName?: Nullable<string>;
    industry?: Nullable<Industry>;
    organizationSize?: Nullable<OrganizationSize>;
}

export interface Organization {
    organizationName?: Nullable<string>;
    industry?: Nullable<Industry>;
    organizationSize?: Nullable<OrganizationSize>;
    user?: Nullable<OrganizationUser>;
}

export interface OrganizationUser {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phonenumber?: Nullable<string>;
}

export interface IQuery {
    getOrganizations(): Nullable<Nullable<Organization>[]> | Promise<Nullable<Nullable<Organization>[]>>;
    getOrganizationById(id?: Nullable<number>): Nullable<Organization> | Promise<Nullable<Organization>>;
    getOrganizationUsers(): Nullable<Nullable<OrganizationUser>[]> | Promise<Nullable<Nullable<OrganizationUser>[]>>;
}

export interface IMutation {
    createOrganization(input?: Nullable<OrganizationInput>): Nullable<Organization> | Promise<Nullable<Organization>>;
    createUser(input?: Nullable<OrganizationUserInput>): Nullable<OrganizationUser> | Promise<Nullable<OrganizationUser>>;
    updateOrganization(input?: Nullable<UpdateOrganizationInput>): Nullable<Organization> | Promise<Nullable<Organization>>;
    deleteOrganization(id?: Nullable<number>): string | Promise<string>;
    softDeleteOrganization(id?: Nullable<number>): string | Promise<string>;
    restoreSoftdeletedOrg(id?: Nullable<number>): string | Promise<string>;
}

type Nullable<T> = T | null;
