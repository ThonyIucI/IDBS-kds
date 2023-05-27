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
export interface OrderStatus{
    id:number
    name:string
}
export type Statuses ="Pendiente" | "En proceso" | "Completado" | "Cancelado"
export interface Order{
    id: string
    startTime: string
    endTime: string
    code: string
    estimatedTime: number 
    customer: Customer
    products: Product[]
    totalPrice: number
    statusId: number
    status: OrderStatus|null
    
}