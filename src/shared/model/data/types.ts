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

export const STATUS_LABELS = {
    [ReportStatusEnum.pending]: 'На модерации',
    [ReportStatusEnum.deniedByAdmin]: 'Отказано на модерации',
    [ReportStatusEnum.processing]: 'На рассмотрении ГАИ',
    [ReportStatusEnum.acceptedAtGAI]: 'Принято ГАИ',
    [ReportStatusEnum.deniedAtGAI]: 'Отказано в ГАИ',
}

export const STATUS_COLORS = {
    [ReportStatusEnum.pending]: 'gray',
    [ReportStatusEnum.deniedByAdmin]: 'crimson',
    [ReportStatusEnum.processing]: 'gray',
    [ReportStatusEnum.acceptedAtGAI]: 'green',
    [ReportStatusEnum.deniedAtGAI]: 'orange',
}