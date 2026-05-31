import { ReportStatusEnum } from "@shared/model/data/types";
import { apiLinks } from "./apiLinks";
import { axiosInstance } from "./baseInstance";

const instance = () =>
    axiosInstance(import.meta.env.VITE_BACKEND_URL);

export const apiService = {
    users: {
        current: () => {
            return instance().get(apiLinks.users.current)
        },
        setNotifications: (data: { receives_notifications: boolean }) => {
            return instance().post(apiLinks.users.notifications, data)
        },
        all: (page: number) => {
            return instance().get(apiLinks.users.all, { params: { page } })
        }
    },
    auth: {
        authenticate: (data: { username: string, password: string }) => {
            return instance().post(apiLinks.auth.token, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        },
        signup: (data: { email: string, password: string }) => {
            return instance().post(apiLinks.auth.signup, data,)
        }
    },
    reports: {
        create: (formdata: FormData) => {
            return instance().post(apiLinks.reports.create, formdata, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                transformRequest: () => {
                    return formdata;
                }
            })
        },
        getAll: ({ filterStatus: status, page }: { filterStatus: string | null, page: number }) => {
            return instance().get(apiLinks.reports.all, { params: { status, page } })
        },
        getAllGeo: () => {
            return instance().get(apiLinks.reports.geo)
        },
        getOne: (data: { id: number }) => {
            return instance().get(apiLinks.reports.one, { params: { report_id: data.id } })
        },
        stats: () => {
            return instance().get(apiLinks.reports.stats)
        },
        changeStatus: (newStatus: ReportStatusEnum, reportId: number) => {
            return instance().patch(apiLinks.reports.changeStatus, {}, { params: { new_status: newStatus, report_id: reportId } })
        }
    }
}