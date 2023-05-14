export interface Bill{
    id:number;
    categoryId:number;
    cityId:number;
    institutionId:number;
    categoryName:string;
    cityName:string;
    institutionName:string;
    contractNo:string;
    invoiceDate:Date;
    dateOfLastPayment:Date;
    invoiceValue:number;
    website:string;
    status:boolean;
}