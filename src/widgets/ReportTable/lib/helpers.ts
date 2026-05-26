import { apiService } from "../../../shared/api/service/apiService";
import { ReportCardsResponse } from "../model/data/types";

export const loadReportCardsData = async (status: string | null): Promise<ReportCardsResponse> => {
    return (await apiService.reports.getAll(status ?? undefined)).data;
}