/* eslint-disable prettier/prettier */
import { Industry, OrganizationSize } from '../enum/organization';

export type organizationType = {
  organizationName: string;
  industry: string;
  organizationSize: string;
};

export type updateOrganizationType = {
  organizationName: string;
  industry: string;
  organizationSize: string;
};
