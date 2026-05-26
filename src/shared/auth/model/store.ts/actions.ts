import { createEvent } from "effector";

export type AuthInstanceType = {
    token: string | null;
    username: string | null;
    password: string | null;
}

export const resetAuthInstanceEv = createEvent();
export const clearAuthInstanceEv = createEvent();
export const setAuthInstanceEv = createEvent<AuthInstanceType>();

export type UserType = {
    daily_reports: number;
    id: number;
    is_admin: boolean;
    receives_notifications: boolean;
    username: string;
};

