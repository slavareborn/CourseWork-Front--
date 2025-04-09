import { useState, useEffect } from 'react';

export default function useToken() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='))
      ?.split('=')[1];
    if (token) {
      setToken(token);
      localStorage.setItem('token', token);
    }
  }, []);
  return token;
}
