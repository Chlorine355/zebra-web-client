export enum ReportStatusEnum {
    pending = 'pending',
    deniedByAdmin = 'denied_by_admin',
    processing = 'processing',
    acceptedAtGAI = 'accepted_at_gai',
    deniedAtGAI = 'denied_at_gai',
}

export type UserType = {
    daily_reports: number;
    id: number;
    is_admin: boolean;
    is_active: boolean;
    receives_notifications: boolean;
    username: string;
};