import { Button, Empty, Select, Table } from "antd";
import { RepordCardResponse } from "./model/data/types";
import { COLUMNS } from "./model/data/data";
import { useEffect, useState } from "react";
import { loadReportCardsData } from "./lib/helpers";
import styles from './ReportTable.module.scss'
import { STATUS_OPTIONS } from "@shared/model/data/types";

export const ReportTable = () => {
    const [data, setData] = useState<RepordCardResponse[] | null>(null)
    const [filterStatus, setFilterStatus] = useState<string | null>(null);

    const load = () => {
        loadReportCardsData(filterStatus).then((response) => {
            setData(response.reports);
        })
    }

    useEffect(load, [])
    return <>
        <div className={styles.buttons}>
            <Select allowClear placeholder={'Статус'} className={styles.select} options={STATUS_OPTIONS} value={filterStatus} onChange={setFilterStatus} />
            <Button onClick={load}>Обновить</Button>
        </div >
        <Table dataSource={data ?? undefined} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} />
    </>
}