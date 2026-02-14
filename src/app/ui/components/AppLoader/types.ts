import { ReactNode } from 'react';

export type AppLoaderPropsType = {
  /** Содержимое компоненты */
  children: ReactNode;
  /** Флаг, отображающий состояние загрузки */
  isLoading: boolean;
};
