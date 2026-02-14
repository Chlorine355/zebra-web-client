import { FC } from 'react';

import { LAYOUT_BODY_ID } from './data';

import { AppLayoutPropsType } from './types';

import styles from './AppLayout.module.scss'

export const AppLayout: FC<AppLayoutPropsType> = (props) => {
  const { headerSlot, children } = props;

  return (
    <div className={styles.container}>
      {headerSlot}
        <div id={LAYOUT_BODY_ID} className={styles.body}>
          {children}
        </div>
    </div>
  );
};
