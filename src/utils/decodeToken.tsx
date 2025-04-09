import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  firstName: string;
  lastName: string;
}

export const decodeToken = (token: string): TokenPayload | null => {
  try {
    const decoded = jwtDecode<TokenPayload>(token);
    const { firstName, lastName } = decoded;

    if (!firstName || !lastName) {
      throw new Error('Missing required fields');
    }

    return { firstName, lastName };
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};
