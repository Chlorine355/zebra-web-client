import { Empty, Table } from "antd";
import { UserType } from "@shared/model/data/types";
import { COLUMNS } from "./model/data/data";

export const UsersTable = () => {
    const rows: UserType[] = [];
    return <Table dataSource={rows} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} />
}