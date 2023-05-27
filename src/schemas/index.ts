export interface Product{
    id: number
    name: string
    description: string
    price: number
    amount:number
}
export interface Customer {
    id: string
    name: string
    address: string
}
export interface Order{
    id: string
    startTime: string
    endTime: string
    code: string
    estimatedTime: number 
    customer: Customer
    products: Product[]
    totalPrice: number
    status: "pending"|"in process"|"completed"|"canceled"
}