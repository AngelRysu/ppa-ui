'use client';

import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLay({ children }: MainLayoutProps) {
  const pathname = usePathname();

  const hideSidebar = (
    pathname === '/'
    || pathname === '/planes'
    || pathname === '/panel'
    || pathname === '/data'
    || pathname === '/sso'
  );

  console.log(pathname);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', textTransform: 'none' }}>
      {!hideSidebar && <Sidebar />}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            padding: 3,
            marginTop: '64px',
            marginLeft: hideSidebar ? '0' : '70px',
            transition: 'margin-left 0.3s ease',
            backgroundColor: '#f9f9f9',
            overflow: 'hidden',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
