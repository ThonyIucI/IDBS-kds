export interface Product{
    id: string
    name: string
    description: string
    price: number
    amount:number
}
interface Customer {
    id: string
    name: string
    address: string
}
export interface Order{
    id: string
    dateTime: Date
    code: string
    estimatedTime: number 
    customer: Customer
    products: Product[]
    totalPrice: number
}