import { AxiosInstance } from 'axios';

abstract class ApiService {
  protected apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * GET запрос с поддержкой параметров или заголовков.
   * @param endpoint - API-эндпоинт.
   * @param options - Опции запроса (параметры и/или заголовки).
   */
  async get<T = any>(
    endpoint: string,
    options?: { params?: Record<string, any>; headers?: Record<string, any> },
  ): Promise<T> {
    try {
      const response = await this.apiClient.get(endpoint, options);
      return response.data;
    } catch (error) {
      console.error('GET error:', error);
      throw error;
    }
  }

  /**
   * POST request implementation.
   * @param endpoint - The API endpoint.
   * @param data - Payload for the request.
   */
  async post<T = any>(endpoint: string, data: Record<string, any>): Promise<T> {
    try {
      const response = await this.apiClient.post<T>(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`POST request failed: ${error}`);
      throw error;
    }
  }

  /**
   * PUT request implementation.
   * @param endpoint - The API endpoint.
   * @param data - Payload for the request.
   */
  async put<T = any>(
    endpoint: string,
    data: Record<string, any>,
  ): Promise<T | null> {
    try {
      const response = await this.apiClient.put<T>(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`PUT request failed: ${error}`);
      return null;
    }
  }

  /**
   * DELETE request implementation.
   * @param endpoint - The API endpoint.
   */
  async delete<T = any>(endpoint: string): Promise<T | null> {
    try {
      const response = await this.apiClient.delete<T>(endpoint);
      return response.data;
    } catch (error) {
      console.error(`DELETE request failed: ${error}`);
      return null;
    }
  }
}

export default ApiService;
