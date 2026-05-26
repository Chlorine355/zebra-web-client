import { useNavigate, useParams } from "react-router"
import styles from './ReportPage.module.scss'
import { ReportResponse, ReportStatusEnum, STATUS_OPTIONS } from "@shared/model/data/types";
import { useEffect, useState } from "react";
import { loadReportData } from "./lib/helpers";
import { getDateTimeString } from "@shared/lib/helpers";
import { Button, Select } from "antd";
import { apiService } from "@shared/api/service/apiService";
import { Image } from 'antd';


const getImageSrc = (uri: string) => `${import.meta.env.VITE_BACKEND_URL}/assets/image?filename=${uri}`

export const ReportPage = () => {
    const { id } = useParams();
    const [data, setData] = useState<ReportResponse | null>(null)
    const navigate = useNavigate();


    const [localStatus, setLocalStatus] = useState<ReportStatusEnum | null>(null)

    const load = () => {
        id && loadReportData(Number(id)).then((response) => {
            setData(response);
            setLocalStatus(response.status)
        })
    }

    useEffect(load, [])

    const statusChangeHandler = (value: ReportStatusEnum) => {
        setLocalStatus(value);
        id && apiService.reports.changeStatus(value, Number(id))
    }

    return data
        ? <div className={styles.wrapper}>
            <div className={styles.column}>
                <Button onClick={() => navigate(-1)} className={styles.button}>Назад</Button>
                <h2>Обращение №{id}</h2>
                <div className={styles.horizontal}>
                    <span>Статус</span>
                    <Select className={styles.select} options={STATUS_OPTIONS} value={localStatus} onChange={statusChangeHandler} />
                </div>
                <div className={styles.item}>
                    <span>Нарушение</span>
                    <span>{data.violation}</span>
                </div>
                <div className={styles.item}>
                    <span>Дата и время</span>
                    <span>{getDateTimeString(new Date(data.datetime))}</span>
                </div>
                <div className={styles.item}>
                    <span>Описание</span>
                    <span>{data.description}</span>
                </div>
                <div className={styles.item}>
                    <span>Геопозиция</span>
                    <span>{data.lat} {data.lon}</span>
                </div>
                <div className={styles.item}>
                    <span>Ближайший адрес (автоматически)</span>
                    <span>{data.address || 'Нет данных'}</span>
                </div>
                <div className={styles.item}>
                    {/* TODO: editable */}
                    <span>Госномер (автоматически)</span>
                    <span>{data.gosnomer || 'Нет данных'}</span>
                </div>
                <div className={styles.horizontal}>

                    <Image.PreviewGroup>
                        {data.assets.map((asset) =>
                            <Image
                                key={asset.uri}
                                alt="svg image"
                                width={200}
                                src={getImageSrc(asset.uri)}
                            />)}
                    </Image.PreviewGroup>
                </div>
            </div>
        </div>
        : null;
}