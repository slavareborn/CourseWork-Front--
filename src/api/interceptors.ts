import sniffApiInstance from './';

sniffApiInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

sniffApiInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      // window.location.href = '/signin';
    }
    console.error('Response error:', error);
    return Promise.reject(error);
  },
);

export default sniffApiInstance;
