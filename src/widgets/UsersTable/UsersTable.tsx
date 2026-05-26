import { Button, Empty, Table } from "antd";
import { UserType } from "@shared/model/data/types";
import { COLUMNS } from "./model/data/data";
import { useEffect, useState } from "react";
import { loadUsersData } from "./lib/helpers";
import styles from './UsersTable.module.scss'

export const UsersTable = () => {
    const [data, setData] = useState<UserType[] | null>(null)

    const load = () => {
        loadUsersData().then((response) => {
            setData(response.users);
        })
    }
    useEffect(load, [])
    return <><Button className={styles.button} onClick={load}>Обновить</Button><Table dataSource={data ?? []} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} /></>
}