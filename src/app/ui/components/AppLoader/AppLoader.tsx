import { FC } from 'react';


import { AppLoaderPropsType } from './types';

/** Компонент загрузки приложения */
export const AppLoader: FC<AppLoaderPropsType> = (props) => {
  const { children, isLoading } = props;

  return !isLoading ? children :  <div>Загрузка...</div>;
};
