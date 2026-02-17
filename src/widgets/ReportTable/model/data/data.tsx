import { ColumnsType } from "antd/es/table";
import { RepordCardResponse } from "./types";
import { getDateTimeString } from "@shared/lib/helpers";
import { ReportStatusEnum, STATUS_COLORS, STATUS_LABELS } from "@shared/model/data/types";

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
        title: 'Дата и время',
        render: (value: string) => getDateTimeString(new Date(value))
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: 'Статус',
        render: (value: ReportStatusEnum) => <div style={{ color: STATUS_COLORS[value] }}>{STATUS_LABELS[value]}</div>
    },
]