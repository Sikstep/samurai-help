import {v1} from "uuid";


export type shoplistType = {
    [key:string]: ThingsToBuyPropsType[]
}


export type ThingsToBuyPropsType = {
    id: string,
    title: string,
    expectedPrice: string,
    realPrice: string,
    inCart: boolean
}

export type ShopListPropsType = {
    shopId: string
    title: string
    whatToBuy: ThingsToBuyPropsType[]
    deleteItemShop: (shopListID: string, itemID: string) => void
    changeFilter: (shoplistID: string, newFilterValue:FilterType)=>void
    addTask:(shopListID: string, newTitle:string)=> void
    changeCheckBox: (shopListID: string, itemID: string, checked: boolean) => void
    filterValue: FilterType

}
export type lidstpropsType = {
    id: string
    title: string
    filter: FilterType
}

export type FilterType = "all" | "buy" | "not buy"



