
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
    name: string;
    industry?: Nullable<Nullable<Industry>[]>;
    size?: Nullable<Nullable<OrganizationSize>[]>;
}

export interface OrganizationUserInput {
    FirstName: string;
    LastName: string;
    Email: string;
    Phone?: Nullable<string>;
}

export interface Organization {
    id: string;
    name?: Nullable<string>;
    industry?: Nullable<Nullable<Industry>[]>;
    size?: Nullable<Nullable<OrganizationSize>[]>;
}

export interface IQuery {
    getOrganizations(): Nullable<Nullable<Organization>[]> | Promise<Nullable<Nullable<Organization>[]>>;
}

export interface IMutation {
    createOrganization(input?: Nullable<OrganizationInput>): Nullable<Organization> | Promise<Nullable<Organization>>;
}

type Nullable<T> = T | null;
