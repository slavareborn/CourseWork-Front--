export interface Location {
  city: string;
  id: number;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  isEmailConfirmed: boolean;
}

export interface SignupResponse {
  user: User;
  token: string;
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  location?: string;
  organization?: string;
}

export enum OrganizationStatus {
  USER = 'user',
  ORGANIZATION = 'organization',
}

export interface SigninPayload {
  email: string;
  password: string;
}
