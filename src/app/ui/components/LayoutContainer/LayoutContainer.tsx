import { FC, useEffect } from 'react';
import { Outlet } from 'react-router';


import { NavMenu } from '../NavMenu';
import { AppLayout } from '../AppLayout/AppLayout';

const LayoutContainer: FC = () => {
  return (
    <AppLayout navMenuSlot={<NavMenu />}>
      <Outlet />
    </AppLayout>
  );
};

export default LayoutContainer;
