export interface ApiDaily {
    data: ApiDailyData
}

export interface ApiDailyData{
    updatedAt: string,
    date: string,
    deaths: number,
    confirmed: number,
    recovered: number,
    new_confirmed: number,
    new_recovered: number,
    new_deaths: number,
    active: number
}