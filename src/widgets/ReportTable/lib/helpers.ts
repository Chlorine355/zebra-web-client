import { apiService } from "../../../shared/api/service/apiService";
import { ReportCardsResponse } from "../model/data/types";

export const loadReportCardsData = async (data: { filterStatus: string | null, page: number }): Promise<ReportCardsResponse> => {
    return (await apiService.reports.getAll(data)).data;
}