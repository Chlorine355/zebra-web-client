import { UserType } from "@shared/model/data/types";
import { apiService } from "../../../shared/api/service/apiService";

export const loadUsersData = async (): Promise<{ users: UserType[] }> => {
    return (await apiService.users.all()).data;
}