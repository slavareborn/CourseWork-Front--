export const isTokenExpired = (token: string): boolean => {
  if (!token) return true;

  const payload = JSON.parse(atob(token.split('.')[1]));
  const currentTime = Math.floor(Date.now() / 1000);

  return payload.exp < currentTime;
};

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts && parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue ?? null;
  }
  return null;
}

export const checkAndRemoveTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');

  if (token && isTokenExpired(token)) {
    localStorage.removeItem('token');
  }
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const checkAndRemoveTokenFromCookies = () => {
  const token = getCookie('token');
  if (token && isTokenExpired(token)) {
    deleteCookie('token');
  }
};
