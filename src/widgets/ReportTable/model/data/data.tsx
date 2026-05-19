import { ColumnsType } from "antd/es/table";
import { RepordCardResponse } from "./types";
import { getDateTimeString } from "@shared/lib/helpers";
import { ReportStatusEnum, STATUS_COLORS, STATUS_LABELS } from "@shared/model/data/types";
import { Link } from "react-router";
import { routesLinks } from "@shared/model/data/routesLinks";
import { StatusBadge } from "@widgets/StatusBadge/StatusBadge";

export const COLUMNS: ColumnsType<RepordCardResponse> = [
    {
        key: 'id',
        dataIndex: 'id',
        title: 'ID'
    },
    {
        key: 'violation',
        dataIndex: 'violation',
        title: 'Нарушение',
        render: (value, { id }) => <Link to={routesLinks.report(id)}>{value}</Link>
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
        render: (value: ReportStatusEnum) => <StatusBadge status={value} />
    },
]