import { UserType } from "@shared/model/data/types";
import { apiService } from "../../../shared/api/service/apiService";

export const loadUsersData = async (page: number): Promise<{ users: UserType[], total: number }> => {
    return (await apiService.users.all(page)).data;
}