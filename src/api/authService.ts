import { SigninPayload, SignupPayload } from '@/types';
import ApiService from './abstractApiService';
import sniffApiInstance from './interceptors';
import { ENDPOINT } from '../constants/constants';
interface ApiErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

class AuthService extends ApiService {
  constructor() {
    super(sniffApiInstance);
  }

  async signup(data: SignupPayload): Promise<any> {
    try {
      const response = await this.post(ENDPOINT.SignUp, data);
      return response.data;
    } catch (err) {
      const error = err as ApiErrorResponse;
      console.error('Signup error:', error);
      throw error;
    }
  }

  async signin(data: SigninPayload): Promise<any> {
    try {
      const response = await this.post(ENDPOINT.Signin, data);
      return response.data;
    } catch (err) {
      const error = err as ApiErrorResponse;
      console.error('Signin error:', error);
      throw error;
    }
  }

  async post(endpoint: string, data: any): Promise<any> {
    try {
      const response = await this.apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('POST error:', error);
      throw error;
    }
  }

  async put(endpoint: string, data: any): Promise<any> {
    try {
      // eslint-disable-next-line no-console
      console.log(this.apiClient);
      const response = await this.apiClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('POST error:', error);
      throw error;
    }
  }

  /**
   * GET запрос с поддержкой токена для авторизации.
   * @param endpoint - API-эндпоинт.
   * @param token - Токен авторизации.
   */
  async get<T = any>(
    endpoint: string,
    options?: { params?: Record<string, any>; headers?: Record<string, any> },
  ): Promise<T> {
    const headers = options?.headers || {};
    if (
      options?.headers?.Authorization === undefined &&
      options?.headers &&
      headers.Authorization === undefined
    ) {
      headers.Authorization = `Bearer ${options?.headers?.Authorization}`;
    }
    try {
      const response = await this.apiClient.get(endpoint, {
        ...options,
        headers,
      });
      return response.data;
    } catch (error) {
      console.error('POST error:', error);
      throw error;
    }
  }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;
