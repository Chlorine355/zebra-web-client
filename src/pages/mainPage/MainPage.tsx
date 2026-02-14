import { Heatmap } from "@widgets/Heatmap/HeatMap";
import { ReportTable } from "@widgets/ReportTable/ReportTable";
import { UsersTable } from "@widgets/UsersTable/UsersTable";
import { Tabs, TabsProps } from "antd";

export const MainPage = () => {
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
            label: 'Карта обращений',
            children: <Heatmap />,
        },
    ];
    return <Tabs items={items} />
}