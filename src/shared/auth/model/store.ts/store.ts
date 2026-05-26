import { createStore } from "effector";
import { setAuthInstanceEv, AuthInstanceType, resetAuthInstanceEv, clearAuthInstanceEv } from "./actions";


const INITIAL_VALUE = {
    token: localStorage.getItem('token') ,
    username: localStorage.getItem('username') ,
    password: localStorage.getItem('password') ,
}
// saved credentials
export const $authInstance = createStore<AuthInstanceType>(INITIAL_VALUE)
    .on(setAuthInstanceEv, (store, payload) => ({ ...store, ...payload }))
    .on(clearAuthInstanceEv, () => ({
        token: null,
        username: null,
        password: null,
    }))
    .reset(resetAuthInstanceEv)

$authInstance.watch(({ username, password, token }) => {
    localStorage.setItem('username', username || '');
    localStorage.setItem('password', password || '');
    localStorage.setItem('token', token || '');
})


export const getAuthorization = () =>
    `Bearer ${$authInstance.getState()?.token}`;
