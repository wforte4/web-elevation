import ClientWrapper from '@/components/ClientWrapper/ClientWrapper';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import type { Metadata } from 'next';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// SummitWebElevation.com
// WebElevation.com
// MountainRiseWeb.com
// TechClimb.com

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='app-container'>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </div>
        <div className='loading-gif'>
          <Image
            src='/loading.gif'
            alt='loading'
            width={150}
            height={150}
          />
        </div>
      </body>
    </html>
  );
}
