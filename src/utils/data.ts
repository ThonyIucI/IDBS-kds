import { OrderStatus } from "@/schemas"

export const PosibleProducts = [
    {
        id: 1,
        name: 'Hamburguesa',
        descriptions: ['', 'Sin papas', 'Sin cremas', 'Con ají extra'],
        price: 10,
    },
    {
        id: 2,
        name: 'Salchipollo',
        descriptions: ['', 'Sin papas', 'Sin cremas', 'Con ají extra'],
        price: 5,
    },
    {
        id: 3,
        name: 'Arroz Chaufa',
        descriptions: ['', 'con cremas', 'sin hotdog', 'sin cremas'],
        price: 15,
    },
    {
        id: 4,
        name: 'Gaseosa',
        descriptions: ['helada', 'sin helar'],
        price: 4,
    },
    {
        id: 5,
        name: 'Ceviche',
        descriptions: ['', 'Mixto', 'con cancha extra', 'con chifles'],
        price: 25,
    },
    {
        id: 6,
        name: 'Causa',
        descriptions: ['', 'atún premium', 'de caballa', 'sin aceituna'],
        price: 10,
    },
]
export const orderStatuses:OrderStatus[]= [
    { id: 1, name: 'pending' },  //->no inicia
    { id: 2, name: 'in process' },//->inicia cuando se le da start
    { id: 3, name: 'completed' },//->finalizado
    { id: 4, name: 'canceled' },//->se canceló
]