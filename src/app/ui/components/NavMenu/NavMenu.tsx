import { $currentUser } from '@shared/auth/model/store.ts/store'
import styles from './NavMenu.module.scss'
import { useUnit } from 'effector-react';
import { Button } from 'antd';
import { resetAuthInstanceEv, setCurrentUserEv } from '@shared/auth/model/store.ts/actions';
import { useNavigate } from 'react-router';
import { routesLinks } from '@shared/model/data/routesLinks';

export const NavMenu = () => {
    const currentUser = useUnit($currentUser);
    const navigate = useNavigate();
    const logoutHandler = () => {
        resetAuthInstanceEv();
        setCurrentUserEv(null);
        navigate(routesLinks.root)
    }
    return <div className={styles.wrapper}>
        <div className={styles.title}>Панель администратора</div>
        {currentUser?.username
            ? <div className={styles.right}>
                {currentUser?.username}
                <Button onClick={logoutHandler} variant={'link'}>Выйти</Button>
            </div>
            : null}
    </div>
}