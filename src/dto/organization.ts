/* eslint-disable prettier/prettier */

export type organizationType = {
  organizationName: string;
  industry: Industry;
  organizationSize: OrganizationSize;
};

export type updateOrganizationType = {
  organizationName: string;
  industry: Industry;
  organizationSize: OrganizationSize;
};

export enum Industry  {
  HEALTHCARE = "HEALTHCARE",
  AGRICULTURE = "AGRICULTURE",
  AUTOMOBILE = "AUTOMOBILE",
  BANKING = "BANKING",
  CONSTRUCTION  = "CONSTRUCTION",
  EDUCATION = 'EDUCATION',
}

export enum OrganizationSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}