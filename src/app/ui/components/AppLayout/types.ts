import { ReactNode } from 'react';

export type AppLayoutPropsType = {
  /** Содержимое компоненты */
  children: ReactNode;
  /** Слот для навигационного меню, если не получится его отобразить, отобразится заглушка */
  navMenuSlot?: ReactNode;
};
