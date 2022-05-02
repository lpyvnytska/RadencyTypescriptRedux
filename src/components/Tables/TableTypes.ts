import { Category } from "../../redux/types"

export type ITodoRow = {
    id: number,
    icon: string
    name: string,
    created: Date,
    category: string,
    content: string,
    dates: string
}

export type IStatisticRow = {
    id: number,
    icon: string,
    category: string,
    active: number,
    archived: number
}

export type IRow = IStatisticRow | ITodoRow