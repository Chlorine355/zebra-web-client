import { Button, Empty, Pagination, Table } from "antd";
import { UserType } from "@shared/model/data/types";
import { COLUMNS } from "./model/data/data";
import { useEffect, useState } from "react";
import { loadUsersData } from "./lib/helpers";
import styles from './UsersTable.module.scss'
import { PAGE_SIZE } from "@shared/model/data/const";

export const UsersTable = () => {
    const [data, setData] = useState<{ users: UserType[], total: number } | null>(null)
    const [page, setPage] = useState<number>(1);

    const load = () => {
        loadUsersData(page - 1).then((response) => {
            setData(response);
        })
    }
    useEffect(load, [])
    return <>
        <Button onClick={load}>Обновить</Button>
        <Table scroll={{ x: 0, y: 400 }} pagination={false} dataSource={data?.users ?? []} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} />
        <Pagination current={page} onChange={setPage} total={data?.total} pageSize={PAGE_SIZE} />

    </>
}