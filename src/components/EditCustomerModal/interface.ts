import { ICustomer } from "../../interface";

export interface IEditCustomerModalProps { 
    customerData: ICustomer, 
    onClose: () => void, 
    onSave: (customer: ICustomer) => void 
}