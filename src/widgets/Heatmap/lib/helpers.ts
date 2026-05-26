import { apiService } from "@shared/api/service/apiService";

export const loadGeoData = async (): Promise<{ items: [number, number][] }> => {
    return (await apiService.reports.getAllGeo()).data;
}