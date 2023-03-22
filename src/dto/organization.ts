/* eslint-disable prettier/prettier */

import { Industry, OrganizationSize } from 'src/enum/organization';

export type organizationType = {
  organizationName: string;
  industry: Industry;
  organizationSize: OrganizationSize;
  mpi: number;
};

export type organizationReturn = {
  organizationName: string;
  industry: Industry;
  organizationSize: OrganizationSize;
  mpi: number;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
};

export type updateOrganizationType = {
  organizationName: string;
  industry: Industry;
  organizationSize: OrganizationSize;
};
