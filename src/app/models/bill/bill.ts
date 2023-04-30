export interface Bill{
    id:number;
    categoryName:string;
    cityName:string;
    institutionName:string;
    contractNo:string;
    invoiceDate:Date;
    dateOfLastPayment:Date;
    invoiceValue:number;
    status:boolean;
}