import { Button, Input } from "antd"
import { useState } from "react"

import styles from './LoginPage.module.scss'
import { apiService } from "@shared/api/service/apiService"
import { setAuthInstanceEv } from "@shared/auth/model/store.ts/actions"
import { useNavigate } from "react-router"
import { routesLinks } from "@shared/model/data/routesLinks"

export const LoginPage = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate()

    const loginAttempt = () => {
        apiService.auth.authenticate({ username, password }).then(({ data }) => {
            setAuthInstanceEv({
                username, password, token: data.access_token
            })
            navigate(routesLinks.main)
        }).catch(() => alert('Неверный логин или пароль'))
    }

    return <div className={styles.wrapper}>
        <h1>Вход</h1>
        <label>
            Имя пользователя
            <Input value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
            Пароль
            <Input value={password} onChange={(event) => setPassword(event.target.value)} type={'password'} />
        </label>
        <Button onClick={loginAttempt}>Войти</Button>
    </div>
}