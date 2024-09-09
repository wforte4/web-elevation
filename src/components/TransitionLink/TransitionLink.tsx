'use client';

import { sleep } from '@/utils/SleepUtil';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const body = document.querySelector('.app-container');

    body?.classList.add('page-transition');

    await sleep(500);
    router.push(href);
  };

  useEffect(() => {
    const body = document.querySelector('.app-container');
    body?.classList.remove('page-transition');
  }, [pathname]);

  return (
    <Link
      onClick={handleTransition}
      className='transition-link'
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
