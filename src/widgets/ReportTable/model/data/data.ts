import { ColumnsType } from "antd/es/table";
import { RepordCardResponse } from "./types";

export const COLUMNS: ColumnsType<RepordCardResponse> = [
    {
        key: 'id',
        dataIndex: 'id',
        title: 'ID'
    },
    {
        key: 'violation',
        dataIndex: 'violation',
        title: 'Нарушение'
    },
    {
        key: 'datetime',
        dataIndex: 'datetime',
        title: 'Дата и время'
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: 'Статус'
    },
]