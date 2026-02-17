import { UserType } from "@shared/model/data/types";
import { ColumnsType } from "antd/es/table";

export const COLUMNS: ColumnsType<UserType> = [
    {
        key: 'id',
        dataIndex: 'id',
        title: 'ID'
    },
    {
        key: 'username',
        dataIndex: 'username',
        title: 'Имя пользователя'
    },
    {
        key: 'is_admin',
        dataIndex: 'is_admin',
        title: 'Роль'
    },
    {
        key: 'daily_reports',
        dataIndex: 'daily_reports',
        title: 'Сообщений за день'
    },
    {
        key: 'receives_notifications',
        dataIndex: 'receives_notifications',
        title: 'Включены уведомления'
    },
    {
        key: 'is_active',
        dataIndex: 'is_active',
        title: 'Статус'
    },

]