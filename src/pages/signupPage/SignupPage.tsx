import { Button, Input } from "antd"
import { useState } from "react"

import styles from './SignupPage.module.scss'
import { apiService } from "@shared/api/service/apiService"
import { setAuthInstanceEv } from "@shared/auth/model/store.ts/actions"
import { Link, useNavigate } from "react-router"
import { routesLinks } from "@shared/model/data/routesLinks"

export const SignupPage = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    const navigate = useNavigate()

    const signup = () => {
        apiService.auth.signup({ email: email, password }).then(() => {
            // on successful signup, retrieve access token, redirect to tabs
            apiService.auth.authenticate({ username: email, password }).then(({ data }) => {
                setAuthInstanceEv({
                    email: email, password, token: data.access_token
                })
                navigate(routesLinks.main);
            })
        }).catch((e) => console.error(e))
    }

    return <div className={styles.wrapper}>
        <h1>Регистрация</h1>
        <label>
            Электронная почта
            <Input value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
            Пароль
            <Input value={password} onChange={(event) => setPassword(event.target.value)} type={'password'} />
        </label>
        <label>
            Повторите пароль
            <Input value={repeatPassword} onChange={(event) => setRepeatPassword(event.target.value)} type={'password'} />
        </label>
        <Button onClick={signup}>Зарегистрироваться</Button>
        <div>После регистрации Вам придёт письмо на указанную почту, чтобы подтвердить её.</div>
        <div>Уже есть аккаунт? <Link to={routesLinks.login}>Войти</Link></div>
    </div>
}