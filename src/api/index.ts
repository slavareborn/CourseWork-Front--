import axios from 'axios';
// const URL = process.env.NEXT_PUBLIC_BASE_URL;
const URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://be-dev.learnon.info';
// eslint-disable-next-line no-console
console.log(URL);
const sniffApiInstance = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default sniffApiInstance;
