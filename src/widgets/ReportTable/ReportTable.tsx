import { Empty, Table } from "antd";
import { RepordCardResponse } from "./model/data/types";
import { COLUMNS } from "./model/data/data";

export const ReportTable = () => {
    const rows: RepordCardResponse[] = [];
    return <Table dataSource={rows} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} />
}