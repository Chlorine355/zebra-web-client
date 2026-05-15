// import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

// import { useUnit } from 'effector-react';

// import { $userProfile, fetchUserProfileFx } from '@entities/currentUser';

import { AppLoader } from '../AppLoader/AppLoader.tsx';
import router from '../../../model/router/router.tsx';

export const AppProvider = () => {

  // const { userProfile, isLoading } = useUnit({
  //   isLoading: fetchUserProfileFx.pending,
  //   userProfile: $userProfile,
  // });

  // useEffect(() => {
  //   fetchUserProfileFx().catch(() => {
  //     showBoundary('Не удалось получить информацию о текущем пользователе');
  //   });
  // }, [keycloakInstance]);

  return (
    <AppLoader isLoading={false}>
        <RouterProvider router={router} />
    </AppLoader>
  );
};
