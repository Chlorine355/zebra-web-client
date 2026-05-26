import { ReportStatusEnum } from "@shared/model/data/types";

export type RepordCardResponse = {
    id: number;
    violation: string;
    datetime: string;
    status: ReportStatusEnum;
}

export type ReportCardsResponse = { reports: RepordCardResponse[], total: number };