import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom';
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder as unknown as typeof TextDecoder;

class BroadcastChannel {
  name: string;
  listeners: Array<(event: { data: any }) => void>;

  constructor(name: string) {
    this.name = name;
    this.listeners = [];
  }

  addEventListener(
    type: string,
    listener: (event: { data: any }) => void,
  ): void {
    if (type === 'message') {
      this.listeners.push(listener);
    }
  }

  postMessage(message: any): void {
    this.listeners.forEach((listener) => listener({ data: message }));
  }

  close(): void {
    this.listeners = [];
  }
}

(global as any).BroadcastChannel = BroadcastChannel;

(global as any).Response = class {
  status: number;
  headers: any;
  body: any;

  constructor(body?: any, init?: any) {
    this.body = body;
    this.status = init?.status || 200;
    this.headers = init?.headers || {};
  }

  json() {
    return Promise.resolve(this.body);
  }

  error() {
    return new global.Response(null, { status: 500 });
  }

  redirect(url: string | URL, status: number = 302) {
    return new global.Response(null, { status });
  }
};

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next-router-mock'),
  useRouter: jest.fn(),
}));
