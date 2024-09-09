'use client';

import Navigation from '../Navigation/Navigation';
import { theme } from '@/theme/Theme';
import { ChakraProvider } from '@chakra-ui/react';

export interface ClientWrapperProps {
  children: React.ReactNode;
}

const ClientWrapper = ({
  children,
}: ClientWrapperProps) => (
  <ChakraProvider theme={theme}>
    <Navigation />
    {children}
  </ChakraProvider>
);

export default ClientWrapper;
