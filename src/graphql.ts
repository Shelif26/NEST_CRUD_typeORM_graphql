
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
    email?: Nullable<string>;
}

export interface UserInput {
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
    user?: Nullable<User>;
}

export interface User {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
    phonenumber?: Nullable<string>;
}

export interface IQuery {
    getOrganizations(): Nullable<Nullable<Organization>[]> | Promise<Nullable<Nullable<Organization>[]>>;
    getOrganizationById(id?: Nullable<number>): Nullable<Organization> | Promise<Nullable<Organization>>;
    getOrganizationUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export interface IMutation {
    createOrganization(input?: Nullable<OrganizationInput>): Nullable<Organization> | Promise<Nullable<Organization>>;
    createUser(input?: Nullable<UserInput>): Nullable<User> | Promise<Nullable<User>>;
    updateOrganization(input?: Nullable<UpdateOrganizationInput>): Nullable<Organization> | Promise<Nullable<Organization>>;
    deleteOrganization(id?: Nullable<number>): string | Promise<string>;
    softDeleteOrganization(id?: Nullable<number>): string | Promise<string>;
    restoreSoftdeletedOrg(id?: Nullable<number>): string | Promise<string>;
}

type Nullable<T> = T | null;
