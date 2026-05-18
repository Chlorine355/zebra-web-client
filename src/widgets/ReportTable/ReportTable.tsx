import { Button, Empty, Table } from "antd";
import { RepordCardResponse } from "./model/data/types";
import { COLUMNS } from "./model/data/data";
import { useEffect, useState } from "react";
import { loadReportCardsData } from "./lib/helpers";
import styles from './ReportTable.module.scss'

export const ReportTable = () => {
    const [data, setData] = useState<RepordCardResponse[] | null>(null)

    const load = () => {
        loadReportCardsData().then((response) => {
            setData(response.reports);
        })
    }

    useEffect(load, [])
    return <><Button className={styles.button} onClick={load}>Обновить</Button><Table dataSource={data ?? undefined} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} /></>
}