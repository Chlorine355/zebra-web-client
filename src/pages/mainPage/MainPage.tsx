import { Tabs, TabsProps } from "antd";

export const MainPage = () => {
    const items: TabsProps['items'] = [
        {
            key: 'reports',
            label: 'Обращения',
            children: 'Content of Tab Pane 1',
        },
        {
            key: 'users',
            label: 'Пользователи',
            children: 'Content of Tab Pane 2',
        },
        {
            key: 'heatmap',
            label: 'Карта обращений',
            children: 'Content of Tab Pane 3',
        },
    ];
    return <Tabs items={items} />
}