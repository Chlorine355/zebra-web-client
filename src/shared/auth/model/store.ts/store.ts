import { createStore } from "effector";
import { setAuthInstanceEv, AuthInstanceType, resetAuthInstanceEv, clearAuthInstanceEv, UserType, setCurrentUserEv } from "./actions";


// saved credentials
export const $authInstance = createStore<AuthInstanceType | null>(null)
    .on(setAuthInstanceEv, (store, payload) => ({ ...store, ...payload }))
    .on(clearAuthInstanceEv, () => ({}))
    .reset(resetAuthInstanceEv)


export const getAuthorization = () =>
    `Bearer ${$authInstance.getState()?.token}`;

export const $currentUser = createStore<UserType | null>(null).on(setCurrentUserEv, (_, payload) => payload);