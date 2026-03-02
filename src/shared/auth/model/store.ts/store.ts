import { createStore } from "effector";
import { setAuthInstanceEv, AuthInstanceType, resetAuthInstanceEv, clearAuthInstanceEv } from "./actions";


const INITIAL_VALUE = {
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
}
// saved credentials
export const $authInstance = createStore<AuthInstanceType>(INITIAL_VALUE)
    .on(setAuthInstanceEv, (store, payload) => ({ ...store, ...payload }))
    .on(clearAuthInstanceEv, () => ({
        token: null,
        email: null,
        password: null,
    }))
    .reset(resetAuthInstanceEv)

$authInstance.watch(({ email, password, token }) => {
    localStorage.setItem('email', email || '');
    localStorage.setItem('password', password || '');
    localStorage.setItem('token', token || '');
})


export const getAuthorization = () =>
    `Bearer ${$authInstance.getState()?.token}`;
