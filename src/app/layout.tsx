import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import StoreProvider from '../store/StoreProvider';
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import Header from '@/components/Header/Header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <StoreProvider>
            <Header />
            {children}
          </StoreProvider>
        </body>
      </ThemeRegistry>
    </html>
  );
}
