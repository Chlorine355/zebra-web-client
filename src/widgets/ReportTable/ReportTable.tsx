import { Button, Empty, Pagination, Select, Table } from "antd";
import { ReportCardsResponse } from "./model/data/types";
import { COLUMNS } from "./model/data/data";
import { useEffect, useState } from "react";
import { loadReportCardsData } from "./lib/helpers";
import styles from './ReportTable.module.scss'
import { STATUS_OPTIONS } from "@shared/model/data/types";
import { PAGE_SIZE } from "@shared/model/data/const";

export const ReportTable = () => {
    const [data, setData] = useState<ReportCardsResponse | null>(null)
    const [filterStatus, setFilterStatus] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);

    const load = (specialFilterStatus: string | null | undefined = undefined) => {
        loadReportCardsData({ filterStatus: specialFilterStatus !== undefined ? specialFilterStatus : filterStatus, page: page - 1 }).then((response) => {
            setData(response);
        })
    }

    const statusChangeHandler = (value: string | null) => {
        setFilterStatus(value ?? null);
        if (page === 1) load(value ?? null); // if not, effect handles it 
        setPage(1);
    }

    useEffect(load, [page])
    return <>
        <div className={styles.buttons}>
            <Select allowClear placeholder={'Статус'} className={styles.select} options={STATUS_OPTIONS} value={filterStatus} onChange={statusChangeHandler} />
            <Button onClick={() => load()}>Обновить</Button>
        </div >
        <Table pagination={false} scroll={{ x: 0, y: 400 }} dataSource={data?.reports ?? undefined} columns={COLUMNS} locale={{ emptyText: <Empty description="Нет данных" /> }} />
        <Pagination current={page} onChange={setPage} total={data?.total} pageSize={PAGE_SIZE} />
    </>
}