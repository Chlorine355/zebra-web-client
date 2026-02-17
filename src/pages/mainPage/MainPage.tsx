import { apiService } from "@shared/api/service/apiService";
import { setCurrentUserEv } from "@shared/auth/model/store.ts/actions";
import { Heatmap } from "@widgets/Heatmap/HeatMap";
import { ReportTable } from "@widgets/ReportTable/ReportTable";
import { UsersTable } from "@widgets/UsersTable/UsersTable";
import { Tabs, TabsProps } from "antd";
import { useEffect } from "react";

export const MainPage = () => {
    useEffect(() => {
        apiService.users.current().then(({ data }) => { setCurrentUserEv(data) })
    }, [])
    const items: TabsProps['items'] = [
        {
            key: 'reports',
            label: 'Обращения',
            children: <ReportTable />,
        },
        {
            key: 'users',
            label: 'Пользователи',
            children: <UsersTable />,
        },
        {
            key: 'heatmap',
            label: 'Тепловая карта обращений',
            children: <Heatmap />,
        },
    ];
    return <Tabs items={items} />
}