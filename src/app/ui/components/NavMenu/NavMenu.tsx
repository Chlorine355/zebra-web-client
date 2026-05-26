import { $authInstance } from '@shared/auth/model/store.ts/store'
import styles from './NavMenu.module.scss'
import { useStoreMap } from 'effector-react';
import { Button } from 'antd';
import { clearAuthInstanceEv } from '@shared/auth/model/store.ts/actions';
import { useNavigate } from 'react-router';
import { routesLinks } from '@shared/model/data/routesLinks';

export const NavMenu = () => {
    const username = useStoreMap({store: $authInstance, keys: [], fn: (store) => store.username});
    const navigate = useNavigate();

    const logoutHandler = () => {
        clearAuthInstanceEv();
        navigate(routesLinks.root)
    }

    const loginHandler = () => {
        navigate(routesLinks.login)
    }

    return <div className={styles.wrapper}>
        <div className={styles.title}>Панель администратора</div>
        {username
            ? <div className={styles.right}>
                {username}
                <Button onClick={logoutHandler} variant={'link'}>Выйти</Button>
            </div>
            : <Button onClick={loginHandler} variant={'link'}>Войти</Button>}
    </div>
}